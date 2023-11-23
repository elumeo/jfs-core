import * as Session from 'API/LOCAL_STORAGE/Session';
import { Epic } from 'Types/Redux';
import { filter, map, mergeMap, of, } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import * as Action from 'Store/Action';

declare const window: Window;

const init: Epic = (action$) => action$.pipe(
  filter(isActionOf(Action.configLoadedAction)),
  mergeMap(() => of(window.localStorage).pipe(
    map((localStorage) => Object.keys(localStorage)),
    map((keys) => keys.map(key => key.replace(Session.BASE_NAME, ''))),
    mergeMap(keys => keys.map(key => Action.syncLocalStorageToReducer({ [key]: Session.getItem(key) }))),
  ))
);
export default init;
