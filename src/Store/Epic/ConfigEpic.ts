import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, concatMap, } from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import JscClient from 'API/JSC/Client';
import IConfig from 'Types/Configuration';
import { Epic } from 'Types/Redux';

const loadConfigEpic: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.loadConfig)),
    concatMap(() => from(axios.get(`./config.json`, {}))),
    concatMap((response: AxiosResponse<IConfig>) => {
      const config: IConfig = response.data;
      JscClient.setConfig(config);
      return of(Action.configLoadedAction({ config }));
    }),
    catchError(() => of(Action.loadConfigFailed()))
  )
);

export default combineEpics(
  loadConfigEpic
);
