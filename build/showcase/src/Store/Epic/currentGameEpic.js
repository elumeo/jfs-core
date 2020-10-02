import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { webSocketLeaveRoomSuccessAction } from '@elumeo/jfs-core/build/Store/Action/WebSocketAction';
import JSCApi from '../../../../Jsc/Api';
import { currentGameUpdateAction } from '../../../../Store/Action/currentGameAction';
import { isActionOf } from 'typesafe-actions';
export const currentGameUpdateEpic = (action$) => {
    return action$.pipe(switchMap(JSCApi.WebSocketClient.onRoomUpdateCurrentGame), filter((data) => data.length > 0), switchMap((data) => of(currentGameUpdateAction(data[0]))));
};
export const currentGameLeaveEpic = action$ => {
    return action$.pipe(filter(isActionOf(webSocketLeaveRoomSuccessAction)), switchMap(() => of(currentGameUpdateAction(null))));
};
//# sourceMappingURL=currentGameEpic.js.map