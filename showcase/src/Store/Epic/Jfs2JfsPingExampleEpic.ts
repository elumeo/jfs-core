import { Epic, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { webSocketLeaveRoomSuccessAction } from 'Core/Store/Action/WebSocketAction';

import { isActionOf } from 'typesafe-actions';
import { Jfs2JfsPingExampleUpdateRoomAction } from 'Action/Jfs2JfsPingExampleAction';
import { WSClient } from 'Core/Base/WSClient';
import Global from "../Reducer";

/**
 * This epic works also for room subscriptions using the config
 */
export const Jfs2JfsPingUpdateExampleEpic: Epic = (
  action$,
  state$: StateObservable<Global.State>
) => {
  return action$.pipe(
    filter(_action => state$.value.Core.Session.sessionDTO !== null),
    switchMap(action => WSClient.listen<string>(action, {
      room: 'ping',
      namespace: state$.value.Core.Configuration.config.JfsWebSocketClient.PrivateNamespace
    })),
    switchMap((data) => of(Jfs2JfsPingExampleUpdateRoomAction(data)))
  );
};

export const Jfs2JfsPingLeaveExampleEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomSuccessAction)),
    filter((action) => action.payload.room === 'ping' && action.payload.namespace === 'Jfs2Jfs'),
    switchMap(() => of(Jfs2JfsPingExampleUpdateRoomAction(null)))
  );
};
