import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from 'API/JSC';
import { Epic } from 'Types/Redux';
import * as Action from 'Store/Action';

const getRegion: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.configLoadedAction)),
    switchMap(() =>
      from(JSCApi.SystemClient.getRegion()).pipe(
        switchMap(response =>
          of(Action.regionLoaded({ regionName: response?.data || null })),
        ),
      ),
    ),
    catchError(() => of(Action.getRegionFailed())),
  );

export default getRegion;
