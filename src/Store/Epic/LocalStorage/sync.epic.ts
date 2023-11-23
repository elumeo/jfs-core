import { map, switchMap, tap } from 'rxjs/operators';
import { saveToLocalStorage, syncLocalStorageToReducer } from 'Store/Action/LocalStorage.action';
import { Epic } from 'Types/Redux';
import { filter } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import * as Session from 'API/LOCAL_STORAGE/Session';

const sync: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(saveToLocalStorage)),
    tap(({ payload, meta }) => Session.setItem(payload, meta)),
    map(({ payload }) => ({ key: payload, value: Session.getItem(payload) })),
    switchMap(({ key, value }) => [syncLocalStorageToReducer({ [key]: value })]),
  )

export default sync
