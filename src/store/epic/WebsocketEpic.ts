import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, tap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction } from '../action/RootAction';
import {
  webSocketConnectFailedAction,
  webSocketConnectRequestAction,
  webSocketConnectSuccessAction,
  webSocketJoinRoomRequestAction,
  webSocketJoinRoomSuccessAction
} from '../action/WebSocketAction';
import IRootReducer from '../reducer/RootReducer';
import { iif, of } from 'rxjs';
import { sessionIsAuthorizedAction } from '../action/SessionAction';
import { WSClient } from '../../base/WSClient';

export const webSocketCheckSessionIsAuthorizedEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(sessionIsAuthorizedAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    switchMap(() => of(webSocketConnectRequestAction()))
  );
};

export const webSocketConnectRequestEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<IRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketConnectRequestAction)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
    concatMap(() => WSClient.connect(
      state.value.sessionReducer.sessionDTO.token,
      state.value.sessionReducer.sessionDTO.lastIPAddress,
      state.value.configReducer.WebSocketClient.Host,
      state.value.configReducer.WebSocketClient.PrivateNamespace
    )),
    switchMap((isConnected) => iif(() => isConnected === true, of(webSocketConnectSuccessAction()), of(webSocketConnectFailedAction())))
  );
};

export const webSocketJoinRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomRequestAction)),
    tap(() => console.log('TAP 2')),
    // concatMap((action) => WSClient.join(action.payload)),
    switchMap((action) => of(webSocketJoinRoomSuccessAction(action.payload)))
  );
};

// export const webSocketJoinRoomSuccessEpic: Epic<RootAction, RootAction> = (action$) => {
//   return action$.pipe(
//     filter(isActionOf(webSocketJoinRoomSuccessAction)),
//     concatMap((action) => WSClient.listen(action.payload)),
//     tap((roomData) => console.log(roomData)),
//     switchMap((roomData) => of(webSocketRoomUpdateAction(roomData)))
//   );
// };

// export const webSocketLeaveRoomRequestActionEpic: Epic<RootAction, RootAction> = (action$) => {
//   return action$.pipe(
//     filter(isActionOf(webSocketLeaveRoomRequestAction)),
//     concatMap((action) => WSClient.leave(action.payload)),
//     switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
//   );
// };
