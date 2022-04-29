import React, { useEffect } from 'react';
import { initialState } from 'Store/Reducer/Core/WebSocket';
import * as Type from 'Types/Configuration';
import { WSClient } from 'API/WS/WSClient';
import * as Action from 'Store/Action';
import { useDispatch } from 'react-redux';
import { webSocketUpdateRoomAction, webSocketConnectFailedAction } from 'Store/Action';

export type Props = {
  children: React.ReactNode;
  config?: Type.Configuration;
  webSocketConnectionReducer?: typeof initialState;
  webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
  webSocketConnectFailedAction?: typeof Action.webSocketConnectFailedAction;
};

const WebSocket = ({ children }: Props) => {
const dispatch = useDispatch()
  useEffect(
    () => {
      WSClient.listenRoomsObservable$.subscribe(roomData =>
        dispatch(webSocketUpdateRoomAction(roomData))
      );
      WSClient.connectionErrorObservable$.subscribe(error => {
        dispatch(webSocketConnectFailedAction(error));
      });
    },
    [WSClient.listenRoomsObservable$]
  );

  return <>{children}</>;
};

export default WebSocket;
