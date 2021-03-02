import { EMPTY } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from '../../Action';
import Locale from '../../../Utilities/Format/Locale';
const setLanguageEpic = action$ => (action$.pipe(filter(isActionOf(Action.changeLanguageAction)), switchMap(({ payload }) => {
    const locale = Locale.mapLanguageToLocale(payload);
    Cookie.set('lang', payload);
    Locale.setLocale(locale);
    // setDefaultLocale(payload);
    return EMPTY;
})));
export default setLanguageEpic;
//# sourceMappingURL=setLanguageEpic.js.map