import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from 'Jsc/Api';
import { getRegionFailed, regionLoaded } from 'Action/SystemAction';
import { configLoadedAction } from 'Action/ConfigAction';
import { Epic } from 'Types/Redux';

const getRegionEpic: Epic = action$ =>
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

export default combineEpics(
  getRegionEpic
);
