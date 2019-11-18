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
import { getRoomState } from '../selectors/WebSocketSelectors';
import { IWebSocketJoiningRoom, IWebSocketRoom } from '../reducer/WebSocketReducer';

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
    filter((action) => {
      const roomState = getRoomState(state.value.webSocketReducer, action.payload.room);
      return roomState === null || roomState.hasJoined === false && roomState.isJoining === false;
    }),
    concatMap((action) => {
      let roomState = getRoomState(state.value.webSocketReducer, action.payload.room);
      if(roomState === null) {
        roomState = {
          isJoining: true,
          hasJoined: false,
          name: action.payload.room,
          error: null
        } as IWebSocketRoom;
      } else {
        roomState.isJoining = true;
      }
      const joiningRoomProps = {
        action: action.payload.action,
        roomState
      } as IWebSocketJoiningRoom;
      return of(joiningRoomProps);
    }),
    switchMap((joiningRoomProps) => of(webSocketJoinRoomLoadingAction(joiningRoomProps)))
  );
};

export const webSocketJoinRoomLoadingEpic: Epic<RootAction, RootAction> = (action$, state: StateObservable<ICoreRootReducer>) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomLoadingAction)),
    concatMap((action) => WSClient.join(action.payload)),
    map((joiningRoom) => {
      joiningRoom.roomState.hasJoined = false;
      joiningRoom.roomState.isJoining = true;
      return joiningRoom;
    }),
    switchMap((joiningRoom) => of(webSocketJoinRoomSuccessAction(joiningRoom)))
  );
};

export const webSocketJoinRoomSuccessEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketJoinRoomSuccessAction)),
    concatMap((action) => WSClient.listen(action.payload)),
    switchMap((roomData) => [webSocketUpdateRoomAction(roomData.roomData), roomData.action(roomData.roomData)])
  );
};

export const webSocketLeaveRoomRequestEpic: Epic<RootAction, RootAction> = (action$) => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomRequestAction)),
    concatMap((action) => WSClient.leave(action.payload)),
    switchMap((room) => of(webSocketLeaveRoomSuccessAction(room)))
  );
};
