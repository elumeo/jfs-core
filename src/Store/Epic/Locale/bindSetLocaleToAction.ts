import { filter, switchMap } from 'rxjs/operators';
import * as Action from 'Store/Action';
import { isActionOf } from 'typesafe-actions';
import { EMPTY } from 'rxjs';
import * as Format from 'Utilities/Format';
import { Epic } from 'Types/Redux';

const bindSetLocaleToAction: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(Action.setLocale)),
    switchMap(({ payload: { locale } }) => {
      Format.Locale.setLocale(locale);
      return EMPTY;
    })
  )
);

export default bindSetLocaleToAction;
