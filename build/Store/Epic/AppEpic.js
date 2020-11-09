import { combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import JscClient from 'Jsc/Client';
const initializeAppEpic = (action$ => action$.pipe(filter(isActionOf(Action.initializeApp)), concatMap(action => {
    JscClient.setPackageJson(action.payload.packageJson);
    const isHTTPS = window.location.protocol.toLowerCase() === 'https:';
    if (!isHTTPS && action.payload.ForceHTTPS) {
        window.location.replace(window.location.toString().replace('http:', 'https:'));
    }
    return of(Action.loadConfig());
})));
export default combineEpics(initializeAppEpic);
//# sourceMappingURL=AppEpic.js.map