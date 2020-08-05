import { Epic, combineEpics } from 'redux-observable';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { loadConfig } from 'Action/ConfigAction';
import { initializeApp } from 'Action/AppAction';
import JscClient from 'Jsc/Client';

const initializeAppEpic: Epic = (
  action$ => action$.pipe(
    filter(isActionOf(initializeApp)),
    concatMap(action => {
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

export default combineEpics(
  initializeAppEpic
);
