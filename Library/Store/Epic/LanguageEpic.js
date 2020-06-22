import { combineEpics } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { setDefaultLocale } from 'react-datepicker';
import Cookie from 'js-cookie';
import { changeLanguageAction } from '../Action/LanguageAction';
import { configLoadedAction } from '../Action/ConfigAction';
import { loadSession } from '../Action/SessionAction';
import Format from '../../Utilities/Format';
const setInitialLanguageEpic = (action$, state$) => action$.pipe(filter(isActionOf(configLoadedAction)), concatMap(() => of(changeLanguageAction(Cookie.get('lang') ||
    state$.value.Core.Configuration.config.Language ||
    'en'), loadSession())));
const setLanguageEpic = action$ => (action$.pipe(filter(isActionOf(changeLanguageAction)), switchMap(({ payload }) => {
    Format.Locale.selectLanguage(payload);
    setDefaultLocale(payload);
    return EMPTY;
})));
export default combineEpics(setInitialLanguageEpic, setLanguageEpic);
//# sourceMappingURL=LanguageEpic.js.map