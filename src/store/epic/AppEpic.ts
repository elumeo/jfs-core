import { loadConfig } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { initializeApp, IInitializeAppPayload } from '../action/AppAction';
import JscClient from '../../base/JscClient';

export const initializeAppEpic: Epic<RootAction, RootAction> = (
  action$ => action$.pipe(
    filter(isActionOf(initializeApp)),
    concatMap((action: PayloadAction<string, IInitializeAppPayload>) => {
      JscClient.setPackageJson(action.payload.packageJson);
      const isHTTPS = window.location.protocol.toLowerCase() === 'https:';
      if (!isHTTPS && action.payload.ForceHTTPS) {
        window.location.replace(
          window.location.toString().replace('http:', 'https:')
        );
      }
      return of(loadConfig());
    })
  )
);
