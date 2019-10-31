import { loadConfig, configLoadedAction, loadConfigFailed } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';

import axios from 'axios';

export const loadConfigEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(loadConfig)),
    switchMap(
      () => from(
        axios.get('/config.json', {})
      ).pipe(
        switchMap(
          (response: any) => of(configLoadedAction(response.data))
        )
      )
    ),
    catchError(() => of(loadConfigFailed()))
  )
);
