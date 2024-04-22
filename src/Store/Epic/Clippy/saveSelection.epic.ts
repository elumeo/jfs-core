import * as UserConfig from 'API/LOCAL_STORAGE/UserConfig';
import { map, switchMap } from 'rxjs/operators';
import { saveToLocalStorage } from 'Store/Action/LocalStorage.action';
import { Epic } from 'Types/Redux';
import { filter } from 'rxjs';
import { isActionOf } from 'typesafe-actions';
import { clippySaveAgent, clippyDestroy } from 'Store/Action';
import { Agent } from 'Types/Clippy.type';

const save: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(clippySaveAgent)),
    filter(() => !!(state$.value.Core?.Session?.sessionDTO?.username ?? '')),
    map(({ payload }) => ({ userId: state$.value.Core?.Session?.sessionDTO?.username, clippyVariant: payload as Agent })),
    switchMap(({ userId, clippyVariant }) => [clippyDestroy(), saveToLocalStorage([userId, UserConfig.clippyFeature].join(UserConfig.SEPERATOR), clippyVariant)]),
  )


export default save
