import { getRegion, regionLoaded, getRegionFailed } from '../action/SystemAction';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { filter, switchMap, catchError } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
import JSCApi from '../../base/JscApi';

export const getRegionEpic: Epic<RootAction, RootAction> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(getRegion)),
    switchMap(
      () => from(
        JSCApi.SystemClient.getRegion()
      ).pipe(
        switchMap(
          (response: any) => of(regionLoaded(response.data))
        )
      )
    ),
    catchError(() => of(getRegionFailed()))
  )
