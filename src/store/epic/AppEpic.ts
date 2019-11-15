import { loadConfig } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, catchError } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf, PayloadAction } from 'typesafe-actions';
import { initializeApp, appInitialized, IInitializeAppPayload } from '../action/AppAction';
import JscClient from '../../base/JscClient';

export const initializeAppEpic: Epic<RootAction, RootAction> = (
  (action$, _store) => action$.pipe(
    filter(isActionOf(initializeApp)),
    concatMap((action: PayloadAction<string, IInitializeAppPayload>) => {
      JscClient.setPackageJson(action.payload.packageJson);
      return of(loadConfig());
    })
  )
)
