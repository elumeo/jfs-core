import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { webSocketLeaveRoomSuccessAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import { isActionOf } from 'typesafe-actions';
import { Jfs2JfsPingExampleUpdateRoomAction } from '../../../../Store/Action/Jfs2JfsPingExampleAction';
import { WSClient } from '@elumeo/jfs-core/build/Base/WSClient';
/**
 * This epic works also for room subscriptions using the config
 */
export const Jfs2JfsPingUpdateExampleEpic = (action$, state$) => {
    return action$.pipe(filter(_action => state$.value.Core.Session.sessionDTO !== null), switchMap(action => WSClient.listen(action, {
        room: 'ping',
        namespace: state$.value.Core.Configuration.config.JfsWebSocketClient.PrivateNamespace
    })), switchMap((data) => of(Jfs2JfsPingExampleUpdateRoomAction(data))));
};
export const Jfs2JfsPingLeaveExampleEpic = action$ => {
    return action$.pipe(filter(isActionOf(webSocketLeaveRoomSuccessAction)), filter((action) => action.payload.room === 'ping' && action.payload.namespace === 'Jfs2Jfs'), switchMap(() => of(Jfs2JfsPingExampleUpdateRoomAction(null))));
};
//# sourceMappingURL=Jfs2JfsPingExampleEpic.js.map