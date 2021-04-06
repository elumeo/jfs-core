import { filter, switchMap, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TA from 'typesafe-actions';
import * as Action from 'Store/Action';
import { WSClient } from 'API/WS/WSClient';
import _ from 'lodash';
import { Epic } from 'Types/Redux';

const disconnectRequest: Epic = (action$, state$) => {
  return action$.pipe(
    filter(TA.isActionOf(Action.webSocketDisconnectRequestAction)),
    filter((action) => Boolean(state$.value.Core.WebSocketConnection[action.payload])),
    concatMap((action) => WSClient.leaveAllRooms(
      action.payload, state$.value.Core.WebSocketConnection[action.payload].rooms
    )),
    concatMap(namespace => WSClient.disconnect(namespace)),
    switchMap(namespace => of(
      Action.webSocketDisconnectSuccessAction(namespace)
    ))
  );
};

export default disconnectRequest;
