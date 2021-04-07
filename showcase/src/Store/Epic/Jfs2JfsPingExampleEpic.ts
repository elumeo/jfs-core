import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import * as Action from 'Store/Action';
import * as TA from 'typesafe-actions';
import { Jfs2JfsPingExampleUpdateRoomAction } from 'Action/Jfs2JfsPingExampleAction';
import JSCApi from 'API/JSC';
import { WSClient }from '@elumeo/jfs-core/build/API/WS/WSClient';
import { Epic } from 'Types/Redux';

type WebSocketAction = (
  TA.PayloadAction<string, JSCApi.DTO.WebSocket.IWebSocketRoomUpdateDTO<string>>
);

/**
 * This epic works also for room subscriptions using the config
 */
export const Jfs2JfsPingUpdateExampleEpic: Epic = (
  action$,
  state$
) => {
  return action$.pipe(
    filter(_action => state$.value.Core.Session.sessionDTO !== null),
    switchMap((action: WebSocketAction) => WSClient.listen<string>(action, {
      room: 'ping',
      namespace: (
        state$.value.Core.Configuration.config.JfsWebSocketClient.PrivateNamespace
      )
    })),
    switchMap((data) => of(Jfs2JfsPingExampleUpdateRoomAction(data)))
  );
};

export const Jfs2JfsPingLeaveExampleEpic: Epic = action$ => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketLeaveRoomSuccessAction)),
    filter(action => (
      action.payload.room === 'ping' &&
      action.payload.namespace === 'Jfs2Jfs'
    )),
    switchMap(() => of(Jfs2JfsPingExampleUpdateRoomAction(null)))
  );
};
