import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, map } from 'rxjs/operators';
import { iif, of } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
import {
  webSocketConnectFailedAction,
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction, webSocketJoinRoomLoadingAction,
  webSocketJoinRoomRequestAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomRequestAction,
  webSocketLeaveRoomSuccessAction,
  webSocketUpdateRoomAction
} from '../action/WebSocketAction';
import { ICoreRootReducer } from '../reducer/combineReducers';
import { authorizeSession } from '../action/SessionAction';
import { WSClient } from '../../base/WSClient';
import { getRoomConnectionState } from '../selectors/WebSocketSelectors';
import { IWebSocketRoomConnection } from '../reducer/WebSocketConnectionReducer';

export const webSocketCheckSessionIsAuthorizedEpic: Epic<RootAction, RootAction> = (
  action$,
  state: StateObservable<ICoreRootReducer>
) => {
  return action$.pipe(
    filter(isActionOf(authorizeSession)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WSClient.disconnect()),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketConnectRequestEpic: Epic<RootAction, RootAction> = (
  action$,
  state: StateObservable<ICoreRootReducer>
) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WSClient.connect(
      state.value.sessionReducer.sessionDTO.token,
      state.value.sessionReducer.sessionDTO.lastIPAddress,
      state.value.configReducer.config.WebSocketClient.Host,
      state.value.configReducer.config.WebSocketClient.PrivateNamespace
    )),
    switchMap((isConnected) => iif(() => isConnected === true, of(webSocketConnectSuccessAction()), of(webSocketConnectFailedAction())))
  );
};

export const webSocketJoinRoomRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    filter((action) => {
      const roomState = getRoomConnectionState(state.value.webSocketReducer, action.payload);
      return roomState === null || roomState.hasJoined === false && roomState.isJoining === false;
    }),
    concatMap((action) => {
      let roomState = getRoomConnectionState(state.value.webSocketReducer, action.payload);
      if(roomState === null) {
        roomState = {
          isJoining: true,
          hasJoined: false,
          name: action.payload,
          error: null
        } as IWebSocketRoomConnection;
      } else {
        roomState.isJoining = true;
      }
      return of(roomState);
    }),
    switchMap((roomState) => of(webSocketJoinRoomLoadingAction(roomState)))
  );
};

export const webSocketJoinRoomLoadingEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomLoadingAction)),
    concatMap((action) => WSClient.join(action.payload.name)),
    map((room) => {
      let roomState = getRoomConnectionState(state.value.webSocketReducer, room);
      roomState.hasJoined = false;
      roomState.isJoining = true;
      return roomState;
    }),
    switchMap((roomState) => of(webSocketJoinRoomSuccessAction(roomState)))
  );
};

export const webSocketJoinRoomSuccessEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomSuccessAction)),
    concatMap((action) => WSClient.listen(action.payload.name)),
    switchMap((roomData) => [webSocketUpdateRoomAction(roomData)])
  );
};

export const webSocketLeaveRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomRequestAction)),
    concatMap((action) => WSClient.leave(action.payload)),
    switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
  );
};
