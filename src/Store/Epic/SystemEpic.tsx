import React from 'react';
import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import { Epic } from 'Types/Redux';
import * as Action from 'Store/Action';
import uuid from 'uuid';
import * as MUI from '@material-ui/core'
import * as Notification from 'Component/Notification';
import { X } from 'Setup/Header';
const noti = {
  id: uuid(),
  content: 'test noti',
  variant: 'info',
}
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
              variant: 'error',
            }),
            Action.addNotification({
              id: uuid(),
              title: 'ASDADASD2',
              variant: 'warning',
              action : (snackbar, id) =>  <X/>
              
            }),
            Action.addNotification({
              id: uuid(),
              subtitle: 'untertitle',
              title:'titel',
              content:'inhalte',
              variant: 'success',
            }),
            Action.addNotification({
              id: uuid(),
              content: 'ASDADASD3',
              variant: 'default',

            }),
            Action.addNotification({
              id: uuid(),
              content: 'ASDADASD3',
              variant: 'info',
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
