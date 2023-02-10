import React from 'react';
import * as MUI from '@mui/material';
import { useIntl } from 'react-intl';
import * as Selector from 'Store/Selector';
import JSCApi from 'API/JSC';
const ROOM_CURRENT_GAME = JSCApi.WebSocketClient.ROOM_CURRENT_GAME;
import useSelector from 'Store/useSelector';
import { useDispatch } from 'react-redux';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '@elumeo/jfs-core/build/Store/Action';

const CurrentGameButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch()
  const config = useSelector(state => state.Core.Configuration.config);

  const jsc2jfsConnected = useSelector(Selector.isJsc2JfsWebSocketConnected);
  const webSocket = useSelector(state => state.Core.WebSocket);
  const jsc2jfsNamespace = useSelector(state => state.Core.WebSocket['Jsc2Jfs']);
  if (!config) {
    return null;
  }

  if (jsc2jfsConnected) {
    const room = jsc2jfsNamespace.rooms.find(({ name }) => name === ROOM_CURRENT_GAME.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => dispatch(webSocketJoinRoomRequestAction(ROOM_CURRENT_GAME))}>
          {formatMessage({ id: 'jscWebSocket.currentGameJoinRoom' })}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button
          onClick={() => dispatch(webSocketLeaveRoomRequestAction(ROOM_CURRENT_GAME))}>
          {formatMessage({ id: 'jscWebSocket.currentGameLeaveRoom' })}
        </MUI.Button>
      );
    }
  }
  return <MUI.Typography variant='button'>'WebSocket not connected!'</MUI.Typography>;
}

export default CurrentGameButton;
