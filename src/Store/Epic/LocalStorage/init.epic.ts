import { Epic } from 'Types/Redux';
import { filter, mergeMap, of, switchMap, } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';

declare const window: Window;

const init: Epic = (action$) => action$.pipe(
  filter(isActionOf(Action.configLoadedAction)),
  mergeMap(() => of(window.localStorage).pipe(
    switchMap((e) => [Action.syncLocalStorageToReducer(e)])
  ))
);
export default init;
