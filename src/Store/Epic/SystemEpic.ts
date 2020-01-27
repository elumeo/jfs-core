import { getRegionFailed, regionLoaded } from '../Action/SystemAction';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { RootAction } from '../Action/RootAction';
import { isActionOf } from 'typesafe-actions';
import JSCApi from '../../JscApi';
import { configLoadedAction } from '../Action/ConfigAction';

export const getRegionEpic: Epic<RootAction, RootAction> = (action$) =>
  action$.pipe(
    filter(isActionOf(configLoadedAction)),
    switchMap(() =>
      from(
        JSCApi.SystemClient.getRegion()
      ).pipe(
        switchMap((response: any) =>
          of(regionLoaded(response && response.data || null))
        )
      )
    ),
    catchError(() => of(getRegionFailed()))
  );
