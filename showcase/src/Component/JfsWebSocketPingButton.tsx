import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import { IWebSocketRoom }from '@elumeo/jfs-core/build/Types/WebSocket';
import {
  getRoomConnectionState,
  isWebSocketNamespaceConnectedState
} from '@elumeo/jfs-core/build/Store/Selector/Core/WebSocket';
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import { useSelector } from '@elumeo/jfs-core/build/Types/Redux';

const pingRoom: IWebSocketRoom = {
  room: 'ping',
  namespace: 'Jfs2Jfs'
};

const JfsPingButton: React.FC = () => {
  const { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } = useActions();
  const { formatMessage } = useIntl();
  const webSocket = useSelector(state => state.Core.WebSocket);
  const config = useSelector(state => state.Core.Configuration.config);
  if (isWebSocketNamespaceConnectedState(
    webSocket,
    config.JfsWebSocketClient.PrivateNamespace
  )) {
    const room = getRoomConnectionState(webSocket, pingRoom);
    if (room === null || room.hasJoined === undefined || room.hasJoined === false) {
      return (
        <MUI.Button
          disabled={room !== null && room.isJoining}
          onClick={() => webSocketJoinRoomRequestAction(pingRoom)}>
          {formatMessage({id: 'jfsWebSocket.pingJoinRoom'})}
        </MUI.Button>
      );
    } else {
      return (
        <MUI.Button onClick={() => webSocketLeaveRoomRequestAction(pingRoom)}>
          {formatMessage({id: 'jfsWebSocket.pingLeaveRoom'})}
        </MUI.Button>
      );
    }
  }
  return <>JfsWebSocket not connected!</>;
};

export default JfsPingButton;
