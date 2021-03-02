import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from '../../Action';
const setInitialLanguageEpic = (action$, state$) => action$.pipe(filter(isActionOf(Action.configLoadedAction)), concatMap(() => of(Action.changeLanguageAction(Cookie.get('lang') ||
    state$.value.Core.Language.language ||
    'en'), Action.loadSession())));
export default setInitialLanguageEpic;
//# sourceMappingURL=setInitialLanguageEpic.js.map