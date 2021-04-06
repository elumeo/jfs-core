import { EMPTY } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from 'Store/Action';
import * as Locale from 'Utilities/Format/Locale';
import { Epic } from 'Types/Redux';

const setLanguage: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.changeLanguageAction)),
    switchMap(({ payload }) => {
      const locale = Locale.mapLanguageToLocale(payload);
      Cookie.set('lang', payload);

      Locale.setLocale(locale);
      // setDefaultLocale(payload);
      return EMPTY;
    })
  )
);

export default setLanguage;
