import { loadConfig } from '../action/ConfigAction';
import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { initializeApp } from '../action/AppAction';

export const initializeAppEpic: Epic<RootAction, RootAction> = (
  (action$, _store) => action$.pipe(
    filter(isActionOf(initializeApp)),
    concatMap(() => of(loadConfig()))
  )
);
