import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../../../Store/Action';
import { WSClient } from '../../../../API/WS/WSClient';
export const checkForReconnect = action$ => {
    return action$.pipe(filter(TA.isActionOf(Action.webSocketConnectRequestAction)), concatMap(() => WSClient.reconnectObservable$), switchMap(namespace => of(Action.webSocketConnectSuccessAction(namespace))));
};
export default checkForReconnect;
