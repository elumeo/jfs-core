import React from 'react';
import {initialState} from 'Store/Reducer/Core/WebSocket';
import * as Type from 'Types/Configuration';
import {WSClient} from 'API/WS/WSClient';
import * as Action from 'Store/Action';
import {useDispatch} from 'react-redux';
import {webSocketUpdateRoomAction, webSocketConnectFailedAction} from 'Store/Action';

export type Props = {
  children: React.ReactNode;
  config?: Type.Configuration;
  webSocketConnectionReducer?: typeof initialState;
  webSocketUpdateRoomAction?: typeof Action.webSocketUpdateRoomAction;
  webSocketConnectFailedAction?: typeof Action.webSocketConnectFailedAction;
};
const WebSocket = ({children}: Props) => {
  const dispatch = useDispatch();
  const [hasSubscribed, setHasSubscribed] = React.useState(false);
  React.useEffect(() => {
    if (!hasSubscribed) {
      const listenRoomsSubscription = WSClient.listenRoomsObservable$.subscribe(roomData => {
        dispatch(webSocketUpdateRoomAction(roomData))
      });
      const connectionErrorSubscription = WSClient.connectionErrorObservable$.subscribe(error => {
        dispatch(webSocketConnectFailedAction(error));
      });
      setHasSubscribed(true);
      return () => {
        if(hasSubscribed) {
          listenRoomsSubscription.unsubscribe();
          connectionErrorSubscription.unsubscribe();
        }
      };
    }
    return () => {
      return undefined
    };
  }, [hasSubscribed]);

  return <>{children}</>;
};
export default WebSocket;
