import { EMPTY } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from '../../Action';
import * as Locale from '../../../Utilities/Format/Locale';
const setLanguage = action$ => (action$.pipe(filter(isActionOf(Action.changeLanguageAction)), switchMap(({ payload }) => {
    const locale = Locale.mapLanguageToLocale(payload);
    const expires = new Date;
    expires.setFullYear(expires.getFullYear() + 100);
    Cookie.set('lang', payload, {
        expires
    });
    Locale.setLocale(locale);
    // setDefaultLocale(payload);
    return EMPTY;
})));
export default setLanguage;
