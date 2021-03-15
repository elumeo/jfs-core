import React from 'react';
import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import { Epic } from 'Types/Redux';
import * as Action from 'Store/Action';
import uuid from 'uuid';
import * as Notification from 'Component/Notification';

const getRegionEpic: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.configLoadedAction)),
    switchMap(() =>
      from(
        JSCApi.SystemClient.getRegion()
      ).pipe(
        switchMap((response: any) =>
          of(
            Action.regionLoaded(response && response.data || null),
            Action.addNotification({
              id: uuid(),
              content: 'ASDADASD1',
              action: (snackbar, id) => (
                <Notification.Button.Dismiss onClick={() => snackbar.closeSnackbar(
                  id
                )}/>
              ),
              error: true
            }),
            Action.addNotification({
              id: uuid(),
              content: 'ASDADASD2',
              error: true
            }),
            Action.addNotification({
              id: uuid(),
              content: 'ASDADASD3',
              error: true
            }),
          )
        )
      )
    ),
    catchError(() => of(Action.getRegionFailed()))
  );

export default combineEpics(
  getRegionEpic
);
