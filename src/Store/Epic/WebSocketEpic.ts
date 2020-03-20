import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { isActionOf, PayloadAction } from 'typesafe-actions';

import { RootAction } from '../Action/RootAction';
import {
  webSocketConnectFailedAction,
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketJoinRoomRequestAction,
  webSocketJoinRoomLoadingAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomRequestAction,
  webSocketLeaveRoomSuccessAction,
  webSocketJoinRoomFailureAction,
  webSocketDisconnectRequestAction,
  webSocketDisconnectSuccessAction, webSocketAddNamespaceAction
} from '../Action/WebSocketAction';
import { ICoreRootReducer } from '../Reducer';
import { getRoomConnectionState } from '../Selectors/WebSocketSelectors';
import { IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/WebSocketConnectionReducer';
import { addNotificationAction } from '../Action/NotificationAction';
import { authorizeSession, logout } from '../Action/SessionAction';
import { WSClient } from '../../Base/WSClient';
import { INotificationContent } from '../Reducer/NotificationReducer';

export const webSocketAppIsInitializedEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(authorizeSession)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => {
      const actions = [];
      const config = state.value.configReducer.config;
      if (config.JscWebSocketClient !== undefined) {
        actions.push(webSocketAddNamespaceAction(config.JscWebSocketClient.PrivateNamespace));
        actions.push(webSocketConnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
      }
      if (config.JfsWebSocketClient !== undefined) {
        actions.push(webSocketAddNamespaceAction(config.JfsWebSocketClient.PrivateNamespace));
        actions.push(webSocketConnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
      }
      return actions;
    })
  );
};

export const webSocketConnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap((action) => WSClient.leaveAllRooms(action.payload, state.value.webSocketConnectionReducer[action.payload].rooms)),
    concatMap((namespace) => WSClient.disconnect(namespace)),
    concatMap((namespace) => {
      let host: string = null;
      const config = state.value.configReducer.config;
      let path = '/socket.io';
      if (config.JscWebSocketClient !== undefined && namespace === config.JscWebSocketClient.PrivateNamespace) {
        host = config.JscWebSocketClient.Host;
        path = (config.JscWebSocketClient.Path !== undefined && config.JscWebSocketClient.Path !== null) ? config.JscWebSocketClient.Path + path : path;
      } else if (config.JfsWebSocketClient !== undefined && namespace === config.JfsWebSocketClient.PrivateNamespace) {
        host = config.JfsWebSocketClient.Host;
        path = (config.JfsWebSocketClient.Path !== undefined && config.JfsWebSocketClient.Path !== null) ? config.JfsWebSocketClient.Path + path : path;
      }
      if (host === null) {
        return EMPTY;
      }

      return WSClient.connect(
        host,
        path,
        namespace,
        state.value.sessionReducer.sessionDTO.token,
        state.value.sessionReducer.sessionDTO.lastIPAddress
      );
    }),
    switchMap((namespace) => {
      return of(webSocketConnectSuccessAction(namespace));
    })
  );
};

export const webSocketLogoutEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(logout)),
    // filter(() => (state.value.configReducer.config.JscWebSocketClient !== undefined && state.value.configReducer.loaded)),
    switchMap(() => {
      const disconnectRequestActions = [];
      const config = state.value.configReducer.config;
      if (config.JscWebSocketClient !== undefined) {
        disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
      }
      if (config.JfsWebSocketClient !== undefined) {
        disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
      }
      return disconnectRequestActions;
      // return of(webSocketDisconnectRequestAction(WS_NAMESPACES.JSC2JFS), webSocketDisconnectRequestAction(WS_NAMESPACES.JFS2JFS))
    })
  );
};

export const webSocketCheckForConnectionErrorEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    concatMap(() => WSClient.connectionErrorObservable$),
    switchMap((err) => {
        if (state.value.webSocketConnectionReducer[err.namespace].isConnecting) {
          return of(
            addNotificationAction({
              message: 'Unable to connect to websocket server (' + err.namespace + ')' + (err.message !== null && err.message !== '' ? ' because of ' + err.message : '') + '!', isError: true
            }),
            webSocketConnectFailedAction(err)
          );
        }

        return EMPTY;
      }
    )
  );
};

export const webSocketCheckForReconnectEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    concatMap(() => WSClient.reconnectObservable$),
    switchMap((namespace) => of(webSocketConnectSuccessAction(namespace)))
  );
};

export const webSocketConnectSuccessEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectSuccessAction)),
    switchMap((action) => {
      // Filter configRooms against information in state (hasJoined true/false)
      let configRooms: string[] = [];
      const config = state.value.configReducer.config;
      if (config.JscWebSocketClient !== undefined && action.payload === config.JscWebSocketClient.PrivateNamespace) {
        configRooms = (config.JscWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JscWebSocketClient.AutoRoomSubscriptions;
      }

      if (config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
        configRooms = (config.JfsWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JfsWebSocketClient.AutoRoomSubscriptions;
      }

      const stateJoinedRooms: string[] = [];
      const stateLeftRooms: string[] = [];
      for (const stateRoom of state.value.webSocketConnectionReducer[action.payload].rooms) {
        if (stateRoom.hasJoined) {
          stateJoinedRooms.push(stateRoom.name);
        } else {
          stateLeftRooms.push(stateRoom.name);
        }
      }
      const cleanedConfigRooms: string[] = [];
      for (const configRoom of configRooms) {
        let foundInLeftRoom = false;
        for (const leftRoom of stateLeftRooms) {
          if (configRoom === leftRoom) {
            foundInLeftRoom = true;
            break;
          }
        }

        if (foundInLeftRoom === false) {
          cleanedConfigRooms.push(configRoom);
        }
      }
      let mergedRooms: string[] = [...cleanedConfigRooms, ...stateJoinedRooms];
      // Removed this logic because in production mode
      // it creates a multi dimension array instead of an one dimension array
      // mergedRooms = [...new Set(mergedRooms)];
      const roomActions: PayloadAction<string, IWebSocketRoom>[] = [];
      for (const room of mergedRooms) {
        const roomData = {
          namespace: action.payload,
          room
        } as IWebSocketRoom;
        roomActions.push(webSocketJoinRoomRequestAction(roomData));
      }
      return roomActions;
    })
  );
};

export const webSocketDisconnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketDisconnectRequestAction)),
    filter((action) => Boolean(state.value.webSocketConnectionReducer[action.payload])),
    concatMap((action) => WSClient.leaveAllRooms(
      action.payload, state.value.webSocketConnectionReducer[action.payload].rooms
    )),
    concatMap((namespace) => WSClient.disconnect(namespace)),
    switchMap((namespace) => of(webSocketDisconnectSuccessAction(namespace)))
  );
};

export const webSocketJoinRoomRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    map((action) => {
      let roomName = WSClient.prepareRoomName(action.payload.room, state.value);
      return {
        isJoining: true,
        hasJoined: false,
        error: null,
        name: roomName,
        namespace: action.payload.namespace
      } as IWebSocketRoomConnection;
    }),
    switchMap((roomState) => of(webSocketJoinRoomLoadingAction(roomState)))
  );
};

export const webSocketJoinRoomLoadingEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomLoadingAction)),
    concatMap((action) => {
      return WSClient.join(action.payload.namespace, action.payload.name).pipe(
        map((room) => {
          const roomObj: IWebSocketRoom = {
            room: room,
            namespace: action.payload.namespace
          };
          let roomState = getRoomConnectionState(state.value.webSocketConnectionReducer, roomObj);
          roomState.isJoining = false;
          roomState.hasJoined = true;
          return roomState;
        }),
        switchMap((roomState) => of(webSocketJoinRoomSuccessAction(roomState))),
        catchError((err) => {
          const update: IWebSocketRoomConnection = {
            name: action.payload.name,
            error: err.error.message,
            hasJoined: false,
            isJoining: false,
            namespace: action.payload.namespace
          };
          const error: INotificationContent = {
            error: {
              response: {
                data: {
                  message: err.error.message,
                  id: 0
                },
                headers: null,
                config: err.error.config,
                status: null,
                statusText: err.error.message
              },
              name: err.error.name,
              config: err.error.config,
              message: err.error.message
            },
            isError: true,
            icon: 'error'
          };
          return of(
            webSocketJoinRoomFailureAction(update),
            addNotificationAction(error)
          );
        })
      );
    })
  );
};

export const webSocketLeaveRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomRequestAction)),
    concatMap((action) => WSClient.leave(action.payload)),
    switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
  );
};
