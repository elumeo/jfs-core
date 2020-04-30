import { combineEpics, Epic } from 'redux-observable';
import { of, EMPTY } from 'rxjs';
import { filter, concatMap, switchMap } from 'rxjs/operators';
import { RootAction } from '../Action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { changeLanguageAction } from '../Action/LanguageAction';

import Cookie from 'js-cookie';
import { configLoadedAction } from '../Action/ConfigAction';
import { loadSession } from '../Action/SessionAction';
import Format from '../../Utilities/Format';

export const setInitialLanguageEpic: Epic<RootAction, RootAction> = (
  (action$, store) => action$.pipe(
    filter(isActionOf(configLoadedAction)),
    concatMap(() => of(
      changeLanguageAction(
        Cookie.get('lang') ||
        store.value.configReducer.config.Language ||
        'en'
      ),
      loadSession()
    ))
  )
);

export const setLanguageEpic: Epic = (action$) => (
    action$.pipe(
        filter(isActionOf(changeLanguageAction)),
        switchMap(({ payload }) => {
            Format.Locale.selectLanguage(payload);
            return EMPTY;
        })
    )
);

export default combineEpics(
    setInitialLanguageEpic,
    setLanguageEpic
)
