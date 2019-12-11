import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { isActionOf, PayloadAction } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
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
  webSocketDisconnectSuccessAction
} from '../action/WebSocketAction';
import { ICoreRootReducer } from '../reducer/combineReducers';
import { WSClient } from '../../base/WSClient';
import { getRoomConnectionState } from '../selectors/WebSocketSelectors';
import { IWebSocketJoinRoom, IWebSocketRoomConnection } from '../reducer/WebSocketConnectionReducer';
import { appInitialized } from '../action/AppAction';
import { addNotificationAction } from '../action/NotificationAction';
import { logout } from '../action/SessionAction';

export const webSocketAppIsInitializedEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(appInitialized)),
    filter(() => state.value.configReducer.config.WebSocketClient !== undefined && state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketLogoutEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(logout)),
    filter(() => (state.value.configReducer.config.WebSocketClient !== undefined && state.value.configReducer.loaded)),
    switchMap(() => of(webSocketDisconnectRequestAction()))
  );
};

export const webSocketConnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WSClient.leaveAllRooms(state.value.webSocketConnectionReducer.rooms)),
    concatMap(() => WSClient.disconnect()),
    concatMap(() => {
      return WSClient.connect(
        state.value.sessionReducer.sessionDTO.token,
        state.value.sessionReducer.sessionDTO.lastIPAddress,
        state.value.configReducer.config.WebSocketClient.Host,
        state.value.configReducer.config.WebSocketClient.PrivateNamespace
      );
    }),
    switchMap(() => of(webSocketConnectSuccessAction()))
  );
};

export const webSocketCheckForConnectionErrorEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    concatMap(() => WSClient.connectionErrorObservable$),
    switchMap(() => of(webSocketConnectFailedAction()))
  );
};

export const webSocketCheckForReconnectEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    concatMap(() => WSClient.reconnectObservable$),
    switchMap(() => of(webSocketConnectSuccessAction()))
  );
};

export const webSocketConnectSuccessEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectSuccessAction)),
    switchMap(() => {
      // Filter configRooms against information in state (hasJoined true/false)
      const configRooms = (state.value.configReducer.config.WebSocketClient.AutoRoomSubscriptions === undefined) ? [] : state.value.configReducer.config.WebSocketClient.AutoRoomSubscriptions;
      const stateJoinedRooms: string[] = [];
      const stateLeftRooms: string[] = [];
      for (const stateRoom of state.value.webSocketConnectionReducer.rooms) {
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
      const roomActions: PayloadAction<string, string>[] = [];
      for (const room of mergedRooms) {
        roomActions.push(webSocketJoinRoomRequestAction(room));
      }
      return roomActions;
    })
  );
};

export const webSocketDisconnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketDisconnectRequestAction)),
    concatMap(() => WSClient.leaveAllRooms(state.value.webSocketConnectionReducer.rooms)),
    concatMap(() => WSClient.disconnect()),
    switchMap(() => of(webSocketDisconnectSuccessAction()))
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
        name: action.payload
      } as IWebSocketRoomConnection;
    }),
    switchMap((roomState) => of(webSocketJoinRoomLoadingAction(roomState)))
  );
};

export const webSocketJoinRoomLoadingEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomLoadingAction)),
    concatMap((action) => {
      return WSClient.join(action.payload.name).pipe(
        map((room) => {
          let roomState = getRoomConnectionState(state.value.webSocketConnectionReducer, room);
          roomState.isJoining = false;
          roomState.hasJoined = true;
          return roomState;
        }),
        switchMap((roomState) => of(webSocketJoinRoomSuccessAction(roomState))),
        catchError((roomState: IWebSocketJoinRoom) => {
          const update: IWebSocketRoomConnection = {
            name: roomState.room,
            error: roomState.error,
            hasJoined: false,
            isJoining: false
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
