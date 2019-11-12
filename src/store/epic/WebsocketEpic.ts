import { Epic, StateObservable } from 'redux-observable';
import { filter, tap, switchMap, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
import {
  webSocketConnectFailedAction,
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketJoinRoomRequestAction,
  webSocketJoinRoomSuccessAction,
  webSocketLeaveRoomRequestAction,
  webSocketLeaveRoomSuccessAction,
  webSocketRoomUpdateAction
} from '../action/WebSocketAction';
import { ICoreRootReducer } from '../reducer/combineReducers';
import { iif, of } from 'rxjs';
import { authorizeSession } from '../action/SessionAction';
import { WebSocketClient } from '../../base/WebSocketClient';

export const webSocketCheckSessionIsAuthorizedActionEpic: Epic<RootAction, RootAction> = (
  action$,
  state: StateObservable<ICoreRootReducer>
) => {
  return action$.pipe(
    filter(isActionOf(authorizeSession)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketConnectRequestActionEpic: Epic<RootAction, RootAction> = (
  action$,
  state: StateObservable<ICoreRootReducer>
) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WebSocketClient.connect(
      state.value.sessionReducer.sessionDTO.token,
      state.value.sessionReducer.sessionDTO.lastIPAddress,
      state.value.configReducer.config.WebSocketClient.Host,
      state.value.configReducer.config.WebSocketClient.PrivateNamespace
    )),
    switchMap((isConnected) => iif(() => isConnected === true, of(webSocketConnectSuccessAction()), of(webSocketConnectFailedAction())))
  );
};

export const webSocketJoinRoomRequestActionEpic: Epic<RootAction, RootAction> = action$ => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    concatMap((action) => WebSocketClient.join(action.payload)),
    switchMap((room) => of(webSocketJoinRoomSuccessAction(room)))
  );
};

export const webSocketJoinRoomSuccessActionEpic: Epic<RootAction, RootAction> = action$ => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomSuccessAction)),
    concatMap((action) => WebSocketClient.listen(action.payload)),
    tap((roomData) => console.log(roomData)),
    switchMap((roomData) => of(webSocketRoomUpdateAction(roomData)))
  );
};

export const webSocketLeaveRoomRequestActionEpic: Epic<RootAction, RootAction> = action$ => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomRequestAction)),
    concatMap((action) => WebSocketClient.leave(action.payload)),
    switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
  );
};
