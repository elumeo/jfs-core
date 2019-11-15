import { Epic, StateObservable } from 'redux-observable';
import { filter, switchMap, concatMap, tap } from 'rxjs/operators';
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
  webSocketUpdateRoomAction
} from '../action/WebSocketAction';
import { ICoreRootReducer } from '../reducer/combineReducers';
import { iif, of } from 'rxjs';
import { authorizeSession } from '../action/SessionAction';
import { WSClient } from '../../base/WSClient';
import { getRoomState } from '../selectors/WebSocketSelectors';

export const webSocketCheckSessionIsAuthorizedEpic: Epic<RootAction, RootAction> = (
  action$,
  state: StateObservable<ICoreRootReducer>
) => {
  return action$.pipe(
    filter(isActionOf(authorizeSession)),
    filter(() => state.value.configReducer.loaded && state.value.sessionReducer.isAuthorized),
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
    // withLatestFrom((action) => getRoomState(state.value.webSocketReducer, action.payload)),
    // withLatestFrom((action) => of(getRoomState(state.value.webSocketReducer, action.payload))),
    concatMap((action) => {
      const roomState = getRoomState(state.value.webSocketReducer, action.payload);
      return of(action, roomState);
    }),
    tap((test) => console.log(test)),
    // filter(([action, room]) => (action && room !== null && room.hasJoined === false && room.isJoining === false)),
    // concatMap(([action]) => WSClient.join(action.payload)),
    // switchMap((room) => of(webSocketJoinRoomSuccessAction(room)))
    switchMap(() => of(webSocketJoinRoomSuccessAction('ping')))
  );
};

export const webSocketJoinRoomSuccessEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomSuccessAction)),
    concatMap((action) => WSClient.listen(action.payload)),
    switchMap((roomData) => of(webSocketUpdateRoomAction(roomData)))
  );
};

export const webSocketLeaveRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomRequestAction)),
    concatMap((action) => WSClient.leave(action.payload)),
    switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
  );
};
