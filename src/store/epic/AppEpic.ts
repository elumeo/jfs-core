import { loadConfig } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, catchError } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { initializeApp, appInitialized } from '../action/AppAction';

export const initializeAppEpic: Epic<RootAction, RootAction> = (
  (action$, _store) => action$.pipe(
    filter(isActionOf(initializeApp)),
    concatMap(() => of(loadConfig()))
  )
)
