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
import { ICoreRootReducer } from '../Reducer/combineReducers';
import { getRoomConnectionState } from '../Selectors/WebSocketSelectors';
import { IWebSocketRoom, IWebSocketRoomConnection } from '../Reducer/WebSocketConnectionReducer';
import { appInitialized } from '../Action/AppAction';
import { addNotificationAction } from '../Action/NotificationAction';
import { logout } from '../Action/SessionAction';
import { WSClient } from '../../Base/WSClient';

export const webSocketAppIsInitializedEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(appInitialized)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => {
      const actions = [];
      const config = state.value.configReducer.config;
      console.log('appInitialized', config.JscWebSocketClient);
      if(config.JscWebSocketClient !== undefined) {
        actions.push(webSocketAddNamespaceAction(config.JscWebSocketClient.PrivateNamespace));
        actions.push(webSocketConnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
      }
      if(config.JfsWebSocketClient !== undefined) {
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
      if(config.JscWebSocketClient !== undefined && namespace === config.JscWebSocketClient.PrivateNamespace) {
        host = config.JscWebSocketClient.Host;
      } else if(config.JfsWebSocketClient !== undefined && namespace === config.JfsWebSocketClient.PrivateNamespace) {
        host = config.JfsWebSocketClient.Host;
      }
      if(host === null) {
        return EMPTY;
      }

      return WSClient.connect(
        host,
        namespace,
        state.value.sessionReducer.sessionDTO.token,
        state.value.sessionReducer.sessionDTO.lastIPAddress
      );
    }),
    switchMap((namespace) => of(webSocketConnectSuccessAction(namespace)))
  );
};

export const webSocketLogoutEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(logout)),
    // filter(() => (state.value.configReducer.config.JscWebSocketClient !== undefined && state.value.configReducer.loaded)),
    switchMap(() => {
      const disconnectRequestActions = [];
      const config = state.value.configReducer.config;
      if(config.JscWebSocketClient !== undefined) {
        disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JscWebSocketClient.PrivateNamespace));
      }
      if(config.JfsWebSocketClient !== undefined) {
        disconnectRequestActions.push(webSocketDisconnectRequestAction(config.JfsWebSocketClient.PrivateNamespace));
      }
      return disconnectRequestActions;
      // return of(webSocketDisconnectRequestAction(WS_NAMESPACES.JSC2JFS), webSocketDisconnectRequestAction(WS_NAMESPACES.JFS2JFS))
    })
  );
};

export const webSocketCheckForConnectionErrorEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    concatMap(() => WSClient.connectionErrorObservable$),
    switchMap((namespace) => of(webSocketConnectFailedAction(namespace)))
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
      if(config.JscWebSocketClient !== undefined && action.payload === config.JscWebSocketClient.PrivateNamespace) {
        configRooms = (config.JscWebSocketClient.AutoRoomSubscriptions === undefined) ? [] : config.JscWebSocketClient.AutoRoomSubscriptions;
      }

      if(config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
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
      mergedRooms = [...new Set(mergedRooms)];
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
    concatMap((action) => WSClient.leaveAllRooms(action.payload, state.value.webSocketConnectionReducer[action.payload].rooms)),
    concatMap((namespace) => WSClient.disconnect(namespace)),
    switchMap((namespace) => of(webSocketDisconnectSuccessAction(namespace)))
  );
};

export const webSocketJoinRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    map((action) => {
      return {
        isJoining: true,
        hasJoined: false,
        error: null,
        name: action.payload.room,
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
        catchError((roomState: IWebSocketRoom) => {
          const update: IWebSocketRoomConnection = {
            name: roomState.room,
            error: roomState.error,
            hasJoined: false,
            isJoining: false,
            namespace: roomState.namespace
          };
          return of(webSocketJoinRoomFailureAction(update), addNotificationAction({
            message: roomState.error,
            isError: true,
            icon: 'error'
          }));
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
