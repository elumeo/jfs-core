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
  const subscription = React.useRef(null)
  const errors = React.useRef(null)
  React.useEffect(
    () => {
      if (!subscription.current) {
        subscription.current = WSClient.listenRoomsObservable$.subscribe(
          roomData => dispatch(webSocketUpdateRoomAction(roomData))
        );
      }
      if (!errors.current) {
        errors.current = WSClient.connectionErrorObservable$.subscribe(
          error => dispatch(webSocketConnectFailedAction(error))
        );
      }
      return () => {
        if (subscription.current) {
          subscription.current.unsubscribe();
        }
        if (errors.current) {
          errors.current.unsubscribe();
        }
      };
    }, [dispatch]);

  return <>{children}</>;
};
export default WebSocket;
