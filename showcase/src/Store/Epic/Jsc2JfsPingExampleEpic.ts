import { Epic, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { webSocketLeaveRoomSuccessAction } from 'Core/Store/Action/WebSocketAction';

import JSCApi from 'Jsc/Api';
import { Jsc2JfsPingExampleUpdateRoomAction } from 'Action/Jsc2JfsPingExampleAction';

import { isActionOf } from 'typesafe-actions';
import Global from "../Reducer";

/**
 * This epic works also for room subscriptions using the config
 */
export const Jsc2JfsPingUpdateExampleEpic: Epic = action$ => {
  return action$.pipe(
    switchMap(JSCApi.WebSocketClient.onRoomUpdatePing),
    switchMap((data) => of(Jsc2JfsPingExampleUpdateRoomAction(data)))
  );
};

export const Jsc2JfsPingLeaveExampleEpic: Epic = (
  action$,
  state$: StateObservable<Global.State>
) => action$.pipe(
  filter(isActionOf(webSocketLeaveRoomSuccessAction)),
  filter((action) => (
    action.payload.room === JSCApi.WebSocketClient.ROOM_PING.room &&
    action.payload.namespace === state$.value.Core.Configuration.config.JscWebSocketClient.PrivateNamespace
  )),
  switchMap(() => of(Jsc2JfsPingExampleUpdateRoomAction(null)))
);
