import { Epic } from 'redux-observable';
import { addLocaleData } from 'react-intl';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { appInitialized } from '../action/AppAction';
import { changeLanguageAction } from '../action/LanguageAction';

import Cookie from 'js-cookie';

export const setInitialLanguageEpic: Epic<RootAction, RootAction> = (
  (action$, store) => action$.pipe(
    filter(isActionOf(appInitialized)),
    concatMap(
      () => ['de', 'en', 'fr', 'it'].map(
        abrev => addLocaleData(require(`react-intl/locale-data/${abrev}`))
      )
    ),
    concatMap(() => {
      const cookie = Cookie.get('lang');
      return of(
        changeLanguageAction(
          store.value.languageReducer.language
            ? store.value.languageReducer.language
            : cookie
              ? cookie
              : store.value.configReducer.config.Language
                ? store.value.configReducer.config.Language
                : 'en'
        )
      )
    })
  )
);
