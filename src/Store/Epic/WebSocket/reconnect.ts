import { filter, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';

export const reconnect: Epic = action$ => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketReconnectAction)),
    switchMap(action => of(Action.webSocketConnectSuccessAction(action.payload))),
  );
};

export default reconnect;
