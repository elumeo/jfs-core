import { configLoadedAction, loadConfig, loadConfigFailed } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, filter, concatMap, } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import axios, { AxiosResponse } from 'axios';
import { isActionOf } from 'typesafe-actions';
import JscClient from '../../base/JscClient';
import IConfig from '../../base/IConfig';
import { appInitialized } from '../action/AppAction';

export const loadConfigEpic: Epic<RootAction, RootAction> = (action$, store) => (
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
