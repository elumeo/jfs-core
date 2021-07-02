import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../../../Store/Action';
import { WSClient } from '../../../../API/WS/WSClient';
const disconnectRequest = (action$, state$) => {
    return action$.pipe(filter(TA.isActionOf(Action.webSocketDisconnectRequestAction)), filter((action) => Boolean(state$.value.Core.WebSocket[action.payload])), concatMap((action) => WSClient.leaveAllRooms(action.payload, state$.value.Core.WebSocket[action.payload].rooms)), concatMap(namespace => WSClient.disconnect(namespace)), switchMap(namespace => of(Action.webSocketDisconnectSuccessAction(namespace))));
};
export default disconnectRequest;
