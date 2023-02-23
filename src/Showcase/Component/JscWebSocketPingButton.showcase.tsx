import * as React from 'react';
import * as MUI from '@mui/material';
import { useIntl } from 'react-intl';
import * as Selector from '../../Store/Selector';

import JSCApi from '../../API/JSC';
import useSelector from '../../Store/useSelector';
import { useDispatch } from 'react-redux';
import { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } from '../../Store/Action';

const ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;

const JscPingButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch()
  const config = useSelector(Selector.Configuration.Configuration);
  const jsc2jfsConnected = useSelector(Selector.WebSocket.isJsc2JfsWebSocketConnected);
  const jsc2jfsNamespace = useSelector(Selector.WebSocket.pickJsc2Jfs);
  if (!config) {
    return null;
  }

  if (jsc2jfsConnected) {
    const room = jsc2jfsNamespace.rooms.find(({ name }) => name === ROOM_PING.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => dispatch(webSocketJoinRoomRequestAction(ROOM_PING))}>
          {formatMessage({ id: 'jscWebSocket.pingJoinRoom' })}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button
          onClick={() => dispatch(webSocketLeaveRoomRequestAction(ROOM_PING))}>
          {formatMessage({ id: 'jscWebSocket.pingLeaveRoom' })}
        </MUI.Button>
      );
    }
  }
  return <>JscWebSocket not connected!</>;
}

export default JscPingButton;
