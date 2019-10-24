import { Epic, StateObservable } from 'redux-observable';
import { filter, tap, take, withLatestFrom, switchMap, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
import {
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketJoinRoomRequestAction, webSocketJoinRoomSuccessAction, webSocketRoomUpdateAction
} from '../action/WebSocketAction';
import IRootReducer from '../reducer/RootReducer';
import { EMPTY, of } from 'rxjs';
import { sessionIsAuthorizedAction } from '../action/SessionAction';
import { WebSocketClient } from '../../base/WebSocketClient';

export const webSocketCheckSessionIsAuthorizedActionEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(sessionIsAuthorizedAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketConnectRequestActionEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    tap(() => console.log('webSocketConnectRequestActionEpic 1')),
    concatMap(() => WebSocketClient.connect(
      state.value.sessionReducer.sessionDTO.token,
      state.value.sessionReducer.sessionDTO.lastIPAddress,
      state.value.configReducer.WebSocketClient.Host,
      state.value.configReducer.WebSocketClient.PrivateNamespace
    )),
    filter((isConnected) => isConnected === true),
    tap((isConnected) => console.log('webSocketConnectRequestActionEpic 2', isConnected)),
    switchMap(() => of(webSocketConnectSuccessAction()))
  );
};

export const webSocketJoinRoomRequestActionEpic: Epic<RootAction, RootAction> = (action$, store: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    concatMap((action) => WebSocketClient.join(action.payload)),
    switchMap((room) => of(webSocketJoinRoomSuccessAction(room)))
  );
};

export const webSocketJoinRoomSuccessActionEpic: Epic<RootAction, RootAction> = (action$, store: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomSuccessAction)),
    tap(() => console.log('webSocketJoinRoomSuccessAction')),
    concatMap((action) => WebSocketClient.listen(action.payload)),
    tap((roomData) => console.log(roomData)),
    switchMap((roomData) => of(webSocketRoomUpdateAction(roomData)))
  );
};

// export const webSocketJoinRoomSuccessActionEpic: Epic<RootAction, RootAction> = (action$, store: StateObservable<IRootReducer>) => {
//   return WebSocketClient.listen('ping').pipe(
//     // filter(isActionOf(webSocketJoinRoomSuccessAction)),
//     // tap(() => console.log('webSocketJoinRoomSuccessAction')),
//     // concatMap((action) => WebSocketClient.listen(action.payload)),
//     tap((roomData) => console.log(roomData))
//   );
// };
