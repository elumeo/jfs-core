import * as React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import {
  getRoomConnectionState,
  isWebSocketNamespaceConnectedState
} from '@elumeo/jfs-core/build/Store/Selector/Core/WebSocket';

import JSCApi from 'API/JSC';
import ROOM_PING = JSCApi.WebSocketClient.ROOM_PING;
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import { useSelector } from 'Types/Redux';

const JscPingButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const {
    webSocketJoinRoomRequestAction,
    webSocketLeaveRoomRequestAction
  } = useActions();

  const config = useSelector(state => state.Core.Configuration.config);
  const webSocket = useSelector(state => state.Core.WebSocket);
  if (!config) {
    return null;
  }
  if (isWebSocketNamespaceConnectedState(
    webSocket,
    config.JscWebSocketClient.PrivateNamespace
  )) {
    const room = getRoomConnectionState(webSocket, ROOM_PING);
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
