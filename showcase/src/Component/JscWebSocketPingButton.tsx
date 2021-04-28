import * as React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import * as Selector from 'Store/Selector';

import JSCApi from 'API/JSC';
import useActions from 'Store/useActions';
import useSelector from 'Store/useSelector';

const ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;

const JscPingButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const {
    webSocketJoinRoomRequestAction,
    webSocketLeaveRoomRequestAction
  } = useActions();

  const config = useSelector(state => state.Core.Configuration.config);
  if (!config) {
    return null;
  }
  const jsc2jfsConnected = useSelector(Selector.isJsc2JfsWebSocketConnected);
  const jsc2jfsNamespace = useSelector(state => state.Core.WebSocket['Jsc2Jfs']);

  if (jsc2jfsConnected) {
    const room = jsc2jfsNamespace.rooms.find(({ name }) => name === ROOM_PING.room);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => webSocketJoinRoomRequestAction(ROOM_PING)}>
          {formatMessage({id: 'jscWebSocket.pingJoinRoom'})}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button
          onClick={() => webSocketLeaveRoomRequestAction(ROOM_PING)}>
          {formatMessage({id: 'jscWebSocket.pingLeaveRoom'})}
        </MUI.Button>
      );
    }
  }
  return <>JscWebSocket not connected!</>;
}

export default JscPingButton;
