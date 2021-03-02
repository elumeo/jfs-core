import { combineEpics } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, switchMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
// import { setDefaultLocale } from 'react-datepicker';
import Cookie from 'js-cookie';

import * as Action from 'Store/Action';
import Locale from 'Utilities/Format/Locale';
import { Epic } from 'Types/Redux';

const setInitialLanguageEpic: Epic = (action$, state$) => action$.pipe(
  filter(isActionOf(Action.configLoadedAction)),
  concatMap(() => of(
    Action.changeLanguageAction(
      Cookie.get('lang') ||
      state$.value.Core.Language.language ||
      'en'
    ),
    Action.loadSession()
  ))
);

const setLanguageEpic: Epic = action$ => (
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

export default combineEpics(
  setInitialLanguageEpic,
  setLanguageEpic
)
