import React, { useEffect } from 'react';
import {
  webSocketConnectionReducerInitialState
} from 'Store/Reducer/Core/WebSocketConnectionReducer';
import IConfig from 'Types/Configuration';
import { WSClient } from '../../Base/WSClient';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
import { webSocketUpdateRoomAction } from 'Action/WebSocketAction';

export interface IWebsocketConnectionProps {
  config?: IConfig;
  webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
  webSocketUpdateRoomAction?: typeof webSocketUpdateRoomAction;
}

export interface IWebsocketConnectionState {
  isConnecting: false,
  isConnected: false
}

const WebSocketConnection: React.FC = ({ children }) => {
  const { webSocketConnectionReducer, config } = useSelector<{
    config?: IConfig;
    webSocketConnectionReducer?: typeof webSocketConnectionReducerInitialState;
    webSocketUpdateRoomAction?: typeof webSocketUpdateRoomAction;
  }>(state => ({
    config: state.Core.Configuration.config,
    webSocketConnectionReducer: state.Core.WebSocketConnection
  }));
  const { webSocketUpdateRoomAction } = useActions();
  useEffect(
    () => {
      WSClient.listenRoomsObservable$
        .subscribe((roomData) => webSocketUpdateRoomAction(roomData));
    },
    []
  );

  return (
    <>
      {children}
    </>
  )
}

export default WebSocketConnection;
