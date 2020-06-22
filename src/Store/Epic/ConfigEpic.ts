import { Epic, combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, concatMap, } from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';
import { isActionOf } from 'typesafe-actions';
import { configLoadedAction, loadConfig, loadConfigFailed } from 'Action/ConfigAction';
import JscClient from 'Jsc/Client';
import IConfig from 'Types/Configuration';

const loadConfigEpic: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(loadConfig)),
    concatMap(() => from(axios.get(`./config.json`, {}))),
    concatMap((response: AxiosResponse<IConfig>) => {
      const config: IConfig = response.data;
      JscClient.setConfig(config);
      return of(
        configLoadedAction({ config })
      );
    }),
    catchError(() => of(loadConfigFailed()))
  )
);

export default combineEpics(
  loadConfigEpic
);
