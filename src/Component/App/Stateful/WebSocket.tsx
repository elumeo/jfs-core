import React, { PropsWithChildren } from 'react';
import { WSClient } from 'API/WS/WSClient';
import { useDispatch } from 'react-redux';
import { webSocketUpdateRoomAction, webSocketConnectFailedAction } from 'Store/Action';

const WebSocket: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const dispatch = useDispatch();
  const subscription = React.useRef(null)
  const errors = React.useRef(null)
  React.useEffect(
    () => {
      if (!subscription.current) {
        subscription.current = WSClient.listenRoomsObservable$.subscribe(
          roomData => {
            dispatch(webSocketUpdateRoomAction(roomData))
          }
        );
      }
      if (!errors.current) {
        errors.current = WSClient.connectionErrorObservable$.subscribe(
          error => {
            dispatch(webSocketConnectFailedAction(error))
          }
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
