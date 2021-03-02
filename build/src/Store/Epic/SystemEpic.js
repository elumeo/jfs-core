import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import JSCApi from '../../../API/JSC';
import { getRegionFailed, regionLoaded } from '../../../Store/Action/SystemAction';
import { configLoadedAction } from '../../../Store/Action/ConfigAction';
import { addNotificationAction } from '../../../Store/Action';
const getRegionEpic = action$ => action$.pipe(filter(isActionOf(configLoadedAction)), switchMap(() => from(JSCApi.SystemClient.getRegion()).pipe(switchMap((response) => of(regionLoaded(response && response.data || null), addNotificationAction({ message: 'ASDADASD1', isError: true }), addNotificationAction({ message: 'ASDADASD2', isError: true }), addNotificationAction({ message: 'ASDADASD3 ', isError: true }))))), catchError(() => of(getRegionFailed())));
export default combineEpics(getRegionEpic);
//# sourceMappingURL=SystemEpic.js.map