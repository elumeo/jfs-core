import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';

import { webSocketLeaveRoomSuccessAction } from 'Core/Store/Action/WebSocketAction';


import JSCApi from 'Jsc/Api/index';
import { currentGameUpdateAction } from 'Action/currentGameAction';

import { isActionOf } from 'typesafe-actions';

export const currentGameUpdateEpic: Epic = (action$) => {
  return action$.pipe(
    switchMap(JSCApi.WebSocketClient.onRoomUpdateCurrentGame),
    filter((data) => data.length > 0),
    switchMap((data) => of(currentGameUpdateAction(data[0])))
  );
};

export const currentGameLeaveEpic: Epic = action$ => {
  return action$.pipe(
    filter(isActionOf(webSocketLeaveRoomSuccessAction)),
    switchMap(() => of(currentGameUpdateAction(null)))
  );
};
