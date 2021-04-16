import { filter, switchMap } from 'rxjs/operators';
import * as Action from '../../Action';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import * as Format from '../../../Utilities/Format';
const setLocaleByLanguage = action$ => (action$.pipe(filter(isActionOf(Action.changeLanguageAction)), switchMap(({ payload: language }) => of(Action.setLocale({
    locale: Format.Locale.mapLanguageToLocale(language)
})))));
export default setLocaleByLanguage;
