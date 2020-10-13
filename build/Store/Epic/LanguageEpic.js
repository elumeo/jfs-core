import { combineEpics } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { setDefaultLocale } from 'react-datepicker';
import Cookie from 'js-cookie';
import * as Action from '../Action';
import Locale from '../../Utilities/Format/Locale';
const setInitialLanguageEpic = (action$, state$) => action$.pipe(filter(isActionOf(Action.configLoadedAction)), concatMap(() => of(Action.changeLanguageAction(Cookie.get('lang') ||
    state$.value.Core.Configuration.config.Language ||
    'en'), Action.loadSession())));
const setLanguageEpic = action$ => (action$.pipe(filter(isActionOf(Action.changeLanguageAction)), switchMap(({ payload }) => {
    const locale = Locale.mapLanguageToLocale(payload);
    Locale.setLocale(locale);
    setDefaultLocale(payload);
    return EMPTY;
})));
export default combineEpics(setInitialLanguageEpic, setLanguageEpic);
//# sourceMappingURL=LanguageEpic.js.map