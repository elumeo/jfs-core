import React, { useEffect } from 'react';
import { initialState } from 'Store/Reducer/Core/WebSocket';
import * as Type from 'Types/Configuration';
import { WSClient } from 'API/WS/WSClient';
import useActions from 'Store/useActions';
import * as Action from 'Store/Action';

export type Props = {
  children: React.ReactNode;
  config?: Type.Configuration;
  webSocketConnectionReducer?: typeof initialState;
  webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
  webSocketConnectFailedAction?: typeof Action.webSocketConnectFailedAction;
};

const WebSocket = ({ children }: Props) => {
  const { webSocketUpdateRoomAction, webSocketConnectFailedAction } = useActions();

  useEffect(
    () => {
      WSClient.listenRoomsObservable$.subscribe(roomData =>
        webSocketUpdateRoomAction(roomData)
      );
      WSClient.connectionErrorObservable$.subscribe(error => {
        webSocketConnectFailedAction(error);
      });
    },
    []
  );

  return <>{children}</>;
};

export default WebSocket;
