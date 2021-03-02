import { combineEpics } from 'redux-observable';
import { filter, switchMap } from 'rxjs/operators';
import * as Action from '../../../Store/Action';
import { isActionOf } from 'typesafe-actions';
import { of, EMPTY } from 'rxjs';
import Format from '../../../Utilities/Format';
import Locale from '../../../Utilities/Format/Locale';
const setLocaleByLanguage = action$ => (action$.pipe(filter(isActionOf(Action.changeLanguageAction)), switchMap(({ payload: language }) => of(Action.setLocale({
    locale: Format.Locale.mapLanguageToLocale(language)
})))));
const updateUtility = action$ => (action$.pipe(filter(isActionOf(Action.setLocale)), switchMap(({ payload: { locale } }) => {
    Locale.setLocale(locale);
    return EMPTY;
})));
export default combineEpics(setLocaleByLanguage, updateUtility);
//# sourceMappingURL=LocaleEpic.js.map