import { Epic } from 'redux-observable';
import { addLocaleData } from 'react-intl';
import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { RootAction } from '../action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { changeLanguageAction, initializeLanguage } from '../action/LanguageAction';

import Cookie from 'js-cookie';
import { appInitialized } from '../action/AppAction';
import { configLoadedAction } from '../action/ConfigAction';

export const setInitialLanguageEpic: Epic<RootAction, RootAction> = (
  (action$, store) => action$.pipe(
    filter(isActionOf(configLoadedAction)),
    concatMap(
      () => ['de', 'en', 'fr', 'it'].map(
        abrev => addLocaleData(require(`react-intl/locale-data/${abrev}`))
      )
    ),
    concatMap(() => {
      const cookie = Cookie.get('lang');
      return of(
        changeLanguageAction(
          cookie
            ? cookie
            : store.value.configReducer.config.Language
              ? store.value.configReducer.config.Language
              : 'en'
        ),
        appInitialized()
      )
    })
  )
);
