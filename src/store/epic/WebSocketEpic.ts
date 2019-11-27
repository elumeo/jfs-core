import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, map, catchError } from 'rxjs/operators';
import { iif, of } from 'rxjs';
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
  webSocketLeaveRoomSuccessAction, webSocketJoinRoomFailureAction
} from '../action/WebSocketAction';
import { ICoreRootReducer } from '../reducer/combineReducers';
import { WSClient } from '../../base/WSClient';
import { getRoomConnectionState } from '../selectors/WebSocketSelectors';
import { IWebSocketJoinRoom, IWebSocketRoomConnection } from '../reducer/WebSocketConnectionReducer';
import { appInitialized } from '../action/AppAction';
import { addNotificationAction } from '../action/NotificationAction';

export const webSocketCheckSessionIsAuthorizedEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(appInitialized)),
    filter(() => state.value.configReducer.config.WebSocketClient !== undefined && state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WSClient.disconnect()),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketConnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => {
      return WSClient.connect(
        state.value.sessionReducer.sessionDTO.token,
        state.value.sessionReducer.sessionDTO.lastIPAddress,
        state.value.configReducer.config.WebSocketClient.Host,
        state.value.configReducer.config.WebSocketClient.PrivateNamespace
      );
    }),
    switchMap((isConnected) => iif(() => isConnected, of(webSocketConnectSuccessAction()), of(webSocketConnectFailedAction())))
  );
};

export const webSocketConnectSuccessEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectSuccessAction)),
    switchMap(() => {
      // Filter configRooms against information in state (hasJoined true/false)
      const configRooms = (state.value.configReducer.config.WebSocketClient.AutoRoomSubscriptions === undefined) ? [] : state.value.configReducer.config.WebSocketClient.AutoRoomSubscriptions;
      const stateRooms: string[] = [];
      const leftRooms: string[] = [];
      for(const stateRoom of state.value.webSocketReducer.rooms) {
        if(stateRoom.hasJoined) {
          stateRooms.push(stateRoom.name);
        } else {
          leftRooms.push(stateRoom.name);
        }
      }
      const cleanedConfigRooms: string[] = [];
      for(const configRoom of configRooms) {
        let foundInLeftRoom = false;
        for(const leftRoom of leftRooms) {
          if(configRoom === leftRoom) {
            foundInLeftRoom = true;
            break;
          }
        }

        if(foundInLeftRoom === false) {
          cleanedConfigRooms.push(configRoom);
        }
      }

      let mergedRooms: string[] = [...cleanedConfigRooms, ...stateRooms];
      mergedRooms = [...new Set(mergedRooms)];
      const roomActions: PayloadAction<string, string>[] = [];
      for(const room of mergedRooms) {
        roomActions.push(webSocketJoinRoomRequestAction(room));
      }
      return roomActions;
    })
  );
};

export const webSocketJoinRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    // Disabled this filter because we want to reconnect automatically when websocket server is restarted
    // filter((action) => {
    //   const roomState = getRoomConnectionState(state.value.webSocketReducer, action.payload);
    //   return roomState === null || roomState.hasJoined === false && roomState.isJoining === false;
    // }),
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
          let roomState = getRoomConnectionState(state.value.webSocketReducer, room);
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
          return of(webSocketJoinRoomFailureAction(update), addNotificationAction({message: roomState.error, isError: true, icon: 'error' }));
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
