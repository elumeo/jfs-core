import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import * as Action from 'Store/Action';
import JSCApi from 'API/JSC';
import { isActionOf } from 'typesafe-actions';
import { Epic } from 'Types/Redux';

/**
 * This epic works also for room subscriptions using the config
 */
export const Jsc2JfsPingUpdateExampleEpic: Epic = action$ => {
  return action$.pipe(
    switchMap(JSCApi.WebSocketClient.onRoomUpdatePing),
    switchMap((data) => of(Action.Jsc2JfsPingExampleUpdateRoomAction(data)))
  );
};

export const Jsc2JfsPingLeaveExampleEpic: Epic = (
  action$,
  state$
) => action$.pipe(
  filter(isActionOf(Action.webSocketLeaveRoomSuccessAction)),
  filter((action) => (
    action.payload.room === JSCApi.WebSocketClient.ROOM_PING.room &&
    action.payload.namespace === state$.value.Core.Configuration.config.JscWebSocketClient.PrivateNamespace
  )),
  switchMap(() => of(Action.Jsc2JfsPingExampleUpdateRoomAction(null)))
);
