import { filter, switchMap } from 'rxjs/operators';
import * as Action from 'Store/Action';
import { isActionOf } from 'typesafe-actions';
import { of } from 'rxjs';
import * as Format from 'Utilities/Format';
import { Epic } from 'Types/Redux';

const setLocaleByLanguage: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.changeLanguageAction)),
    switchMap(({ payload: language }) => of(Action.setLocale({
      locale: Format.Locale.mapLanguageToLocale(language)
    })))
  )
);

export default setLocaleByLanguage;
