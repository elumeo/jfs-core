import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import * as Selector from 'Store/Selector';
import JSCApi from 'API/JSC';
const ROOM_CURRENT_GAME = JSCApi.WebSocketClient.ROOM_CURRENT_GAME;
import useActions from 'Store/useActions';
import useSelector from 'Store/useSelector';

const CurrentGameButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } = useActions();
  const config = useSelector(state => state.Core.Configuration.config);
  if (!config) {
    return null;
  }

  const jsc2jfsConnected = useSelector(Selector.isJsc2JfsWebSocketConnected);
  const jsc2jfsNamespace = useSelector(state => state.Core.WebSocket['Jsc2Jfs']);

  const webSocket = useSelector(state => state.Core.WebSocket);
  if (jsc2jfsConnected) {
    const room = jsc2jfsNamespace.rooms.find(({ name }) => name === ROOM_CURRENT_GAME.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => webSocketJoinRoomRequestAction(ROOM_CURRENT_GAME)}>
          {formatMessage({ id: 'jscWebSocket.currentGameJoinRoom' })}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button
          onClick={() => webSocketLeaveRoomRequestAction(ROOM_CURRENT_GAME)}>
          {formatMessage({ id: 'jscWebSocket.currentGameLeaveRoom' })}
        </MUI.Button>
      );
    }
  }
  return <MUI.Typography variant='button'>'WebSocket not connected!'</MUI.Typography>;
}

export default CurrentGameButton;
