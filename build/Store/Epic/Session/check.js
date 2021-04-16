import { catchError, concatMap, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { from, of, concat, EMPTY } from 'rxjs';
import * as Action from '../../Action';
import JSCApi from '../../../API/JSC';
const toastableErrorIds = [
    'authorizationRequired', 'invalidSession'
];
const checkSession = (action$, store) => (action$.pipe(filter(isActionOf(Action.checkSession)), concatMap(() => from(JSCApi.SessionClient.getCurrentSessionFrontend(store.value.Core.Configuration.config.AppName)).pipe(switchMap((response) => of(Action.authorizeSession({ frontendSessionDTO: response.data }))))), catchError((error) => {
    const isToastable = (toastableErrorIds.find(id => { var _a; return id === ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.id); }));
    return concat(isToastable
        ? of(Action.addToastAction({
            contentTranslationId: (isToastable
                ? (error.response.id === 'authorizationRequired'
                    ? 'userRights.checkFailed'
                    : 'session.expired')
                : null),
            isError: true
        }))
        : EMPTY, of(Action.unauthorizeSession()));
})));
export default checkSession;
