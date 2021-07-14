import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import * as Action from 'Store/Action';
import JSCApi from 'API/JSC';
import { isActionOf } from 'typesafe-actions';
import { Epic } from 'redux-observable';

export const currentGameUpdateEpic: Epic = (action$) => (
  action$.pipe(
    switchMap(JSCApi.WebSocketClient.onRoomUpdateCurrentGame),
    filter((data) => data.length > 0),
    switchMap((data) => of(Action.currentGameUpdateAction(data[0])))
  )
);

export const currentGameLeaveEpic: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.webSocketLeaveRoomSuccessAction)),
    switchMap(() => of(Action.currentGameUpdateAction(null)))
  )
);
