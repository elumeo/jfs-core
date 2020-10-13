import { Epic, combineEpics } from 'redux-observable';
import { filter, switchMap } from 'rxjs/operators';
import * as LanguageAction from '../Action/LanguageAction';
import * as LocaleAction from '../Action/LocaleAction';
import { isActionOf } from 'typesafe-actions';
import { of, EMPTY } from 'rxjs';
import Format from '../../Utilities/Format';
import Locale from '../../Utilities/Format/Locale';

const setLocaleByLanguage: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(LanguageAction.changeLanguageAction)),
    switchMap(({ payload: language }) => of(LocaleAction.setLocale({
      locale: Format.Locale.mapLanguageToLocale(language as 'de' | 'en' | 'it')
    })))
  )
);

const updateUtility: Epic = action$ => (
  action$.pipe(
    filter(isActionOf(LocaleAction.setLocale)),
    switchMap(({ payload: { locale } }) => {
      Locale.setLocale(locale);
      return EMPTY;
    })
  )
)

export default combineEpics(
  setLocaleByLanguage,
  updateUtility
);
