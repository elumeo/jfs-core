import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import { map, switchMap } from 'rxjs/operators';
import { saveToLocalStorage } from 'Store/Action/LocalStorage.action';
import { Epic } from 'Types/Redux';
import { filter } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { ThemeVariant } from 'Types/ThemeVariant.type';
import { savePreferredThemeVariant } from 'Store/Action';

const save: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(savePreferredThemeVariant)),
    filter(() => !!(state$.value.Core?.Session?.sessionDTO?.username ?? '')),
    map(({ payload }) => ({ userId: state$.value.Core?.Session?.sessionDTO?.username, themeVariant: payload as ThemeVariant })),
    switchMap(({ userId, themeVariant }) => [saveToLocalStorage([userId, UserConfig.themeFeature].join(UserConfig.SEPERATOR), themeVariant)]),
  )


export default save
