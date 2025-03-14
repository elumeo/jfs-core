import * as Session from 'API/LOCAL_STORAGE/Session';
import { Epic } from 'Types/Redux';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';
import { of } from 'rxjs';

declare const window: Window;

const init: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(Action.configLoadedAction)),
    mergeMap(() =>
      of(window.localStorage).pipe(
        map((localStorage) => Object.keys(localStorage)),
        map((keys) => keys.map((key) => key.replace(Session.BASE_NAME, ''))),
        map((keys) => keys.reduce((acc, key) => ({ ...acc, [key]: Session.getItem(key) }), {})),
        switchMap((payload) => [Action.syncLocalStorageToReducer(payload)])
      )
    )
  );
export default init;
