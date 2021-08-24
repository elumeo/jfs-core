import { EMPTY } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from 'Store/Action';
import * as Locale from 'Utilities/Format/Locale';
import { Epic } from 'Types/Redux';
import moment from 'moment';

const setLanguage: Epic = action$ =>
  action$.pipe(
    filter(isActionOf(Action.changeLanguageAction)),
    switchMap(({ payload }) => {
      const locale = Locale.mapLanguageToLocale(payload);
      const expires = new Date();
      moment.locale(payload);
      expires.setFullYear(expires.getFullYear() + 100);
      Cookie.set('lang', payload, {
        expires,
      });

      Locale.setLocale(locale);
      // setDefaultLocale(payload);
      return EMPTY;
    }),
  );

export default setLanguage;
