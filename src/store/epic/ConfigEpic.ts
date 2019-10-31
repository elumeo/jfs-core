import { configLoadedAction, loadConfig, loadConfigFailed } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { EMPTY, from, of } from 'rxjs';
import { catchError, filter, switchMap, } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import axios from 'axios';
import { isActionOf } from "typesafe-actions";

export const autoLoadConfigEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(() => !store.value.configReducer.loaded && !store.value.configReducer.pending),
    switchMap(() => {
      // console.log("triggering load config");
      // return of(loadConfig());
      return EMPTY;
    }),
    catchError(() => of(loadConfigFailed()))
  )
);

export const loadConfigEpic: Epic<RootAction, RootAction> = (action$, store) => (
  action$.pipe(
    filter(isActionOf(loadConfig)),
    switchMap(() =>
      from(axios.get('/config.json', {})).pipe(
        switchMap((response: any) => of(configLoadedAction(response.data)))
      )),
    catchError(() => of(loadConfigFailed()))
  )
);
