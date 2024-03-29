import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { Epic } from 'Types/Redux';
import * as Action from 'Store/Action';
import JscClient from 'API/JSC/Client';

const initializeApp: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.initializeApp)),
    concatMap(action => {
      JscClient.setPackageJson(
        action.payload.packageJson as { version: string },
      );
      return of(Action.loadConfig());
    }),
  );

export default initializeApp;
