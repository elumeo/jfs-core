import React, { useEffect } from 'react';
import { initialState } from 'Store/Reducer/Core/WebSocket';
import * as Type from 'Types/Configuration';
import { WSClient } from 'API/WS/WSClient';
import useActions from 'Store/useActions';
import * as Action from 'Store/Action';

export type Props = {
  config?: Type.Configuration;
  webSocketConnectionReducer?: typeof initialState;
  webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
};

const WebSocket: React.FC = ({ children }) => {
  const { webSocketUpdateRoomAction } = useActions();

  useEffect(
    () => {
      WSClient.listenRoomsObservable$.subscribe(roomData =>
        webSocketUpdateRoomAction(roomData),
      );
    },
    []
  );

  return <>{children}</>;
};

export default WebSocket;
