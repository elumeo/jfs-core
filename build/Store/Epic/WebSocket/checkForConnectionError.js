import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from '../../Action';
import { WSClient } from '../../../API/WS/WSClient';
import { v4 as uuid } from 'uuid';
const checkForConnectionError = (action$, state) => {
    return action$.pipe(filter(TA.isActionOf(Action.webSocketConnectRequestAction)), concatMap(() => WSClient.connectionErrorObservable$), switchMap((err) => {
        if (state.value.Core.WebSocket[err.namespace].isConnecting) {
            return of(Action.addNotification({
                id: uuid(),
                variant: 'error',
                title: 'Websocket',
                subtitle: 'Connection Request',
                content: ('Unable to connect to websocket server (' + err.namespace + ')'
                    + (err.message !== null && err.message !== ''
                        ? ' because of ' + err.message
                        : '')
                    + '!'),
            }), Action.webSocketConnectFailedAction(err));
        }
        return EMPTY;
    }));
};
export default checkForConnectionError;
