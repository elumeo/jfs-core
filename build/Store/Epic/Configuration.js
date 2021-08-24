import { from, of } from 'rxjs';
import { catchError, filter, concatMap } from 'rxjs/operators';
import axios from 'axios';
import { isActionOf } from 'typesafe-actions';
import * as Action from '../Action';
import JscClient from '../../API/JSC/Client';
const loadConfiguration = action$ => action$.pipe(filter(isActionOf(Action.loadConfig)), concatMap(() => from(axios.get(`./config.json`, {}))), concatMap((response) => {
    const config = response.data;
    JscClient.setConfig(config);
    return of(Action.configLoadedAction({ config }));
}), catchError(() => of(Action.loadConfigFailed())));
export default loadConfiguration;
