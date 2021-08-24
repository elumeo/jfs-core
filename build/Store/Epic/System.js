import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from '../../API/JSC';
import * as Action from '../Action';
const getRegion = action$ => action$.pipe(filter(isActionOf(Action.configLoadedAction)), switchMap(() => from(JSCApi.SystemClient.getRegion()).pipe(switchMap(response => of(Action.regionLoaded({ regionName: (response === null || response === void 0 ? void 0 : response.data) || null }))))), catchError(() => of(Action.getRegionFailed())));
export default getRegion;
