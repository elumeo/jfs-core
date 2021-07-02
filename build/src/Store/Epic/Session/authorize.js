import { concatMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { of, EMPTY } from 'rxjs';
import * as Action from '../../../../Store/Action';
const authorize = (action$, state$) => (action$.pipe(filter(isActionOf(Action.authorizeSession)), concatMap(() => (state$.value.Core.App.appInitialized
    ? EMPTY
    : of(Action.appInitialized())))));
export default authorize;
