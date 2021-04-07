import React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import { isWebSocketNamespaceConnectedState }from '@elumeo/jfs-core/build/Store/Selector/Core/WebSocket';
import { getRoomConnectionState }from '@elumeo/jfs-core/build/Store/Selector/Core/WebSocket';

import JSCApi from 'Jsc/Api/index';
import ROOM_CURRENT_GAME = JSCApi.WebSocketClient.ROOM_CURRENT_GAME;
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import { useSelector } from 'Types/Redux';

const CurrentGameButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const { webSocketJoinRoomRequestAction, webSocketLeaveRoomRequestAction } = useActions();
  const config = useSelector(state => state.Core.Configuration.config);

  const webSocket = useSelector(state => state.Core.WebSocket);
  if (isWebSocketNamespaceConnectedState(
    webSocket,
    config.JscWebSocketClient.PrivateNamespace
  )) {
    const room = getRoomConnectionState(webSocket, ROOM_CURRENT_GAME);
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
  return <>'WebSocket not connected!'</>;
}

export default CurrentGameButton;
