import { concatMap, filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of, from, concat } from 'rxjs';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';
import JSC from 'API/JSC';

const logout: Epic = (action$, store) => (
  action$.pipe(
    filter(isActionOf(Action.logout)),
    concatMap(action => {
      const session = (
        action.payload && action.payload.sessionDTO
          ? action.payload.sessionDTO
          : store.value.Core.Session.sessionDTO
      );
      if (session) {
        return from(JSC.SessionClient.logout(session)).pipe(
          switchMap(() => concat(
            of(Action.logoutFinished()),
            of(Action.closeLogout()),
            of(Action.unauthorizeSession())
          ))
        );
      } else {
        return of(Action.logoutFinished());
      }
    })
  )
);

export default logout;
