import { switchMap } from 'rxjs/operators';
import { saveToLocalStorage, syncLocalStorageToReducer } from 'Store/Action/LocalStorage.action';
import { Epic } from 'Types/Redux';
import { filter, tap } from 'rxjs';
import { isActionOf } from 'typesafe-actions';

const save: Epic = (action$) =>
  action$.pipe(
    filter(isActionOf(saveToLocalStorage)),
    tap(({ payload, meta }) => window.localStorage.setItem(payload, meta)),
    switchMap(({ payload, meta }) => [syncLocalStorageToReducer({ [payload]: meta })]),
  )

export default save
