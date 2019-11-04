import { configLoadedAction, loadConfig, loadConfigFailed } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap, } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import axios from 'axios';
import { isActionOf } from "typesafe-actions";
import { injectConfig } from "../../base/Client";

export const autoLoadConfigEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(() => !store.value.configReducer.loaded && !store.value.configReducer.pending),
    switchMap(() => of(loadConfig()))
  )
);

export const loadConfigEpic: Epic<RootAction, RootAction> = (action$) => (
  action$.pipe(
    filter(isActionOf(loadConfig)),
    switchMap(() =>
      from(axios.get('/config.json', {})).pipe(
        switchMap((response: any) => {
          injectConfig(response.data);
          return of(configLoadedAction(response.data));
        })
      )),
    catchError(() =>  of(loadConfigFailed()))
  )
);
