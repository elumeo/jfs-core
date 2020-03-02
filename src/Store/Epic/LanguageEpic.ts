import { Epic } from 'redux-observable';
import { addLocaleData } from 'react-intl';
import { of } from 'rxjs';
import {filter, concatMap, tap} from 'rxjs/operators';
import { RootAction } from '../Action/RootAction';
import { isActionOf } from 'typesafe-actions';
import { changeLanguageAction } from '../Action/LanguageAction';

import Cookie from 'js-cookie';
import { configLoadedAction } from '../Action/ConfigAction';
import { loadSession } from '../Action/SessionAction';

export const setInitialLanguageEpic: Epic<RootAction, RootAction> = (
  (action$, store) => action$.pipe(
    filter(isActionOf(configLoadedAction)),
    tap(() => {
      addLocaleData(require(`react-intl/locale-data/de`));
      addLocaleData(require(`react-intl/locale-data/en`));
      addLocaleData(require(`react-intl/locale-data/fr`));
      addLocaleData(require(`react-intl/locale-data/it`));
    }),
    concatMap(() => {
      const cookie = Cookie.get('lang');
      return of(
        changeLanguageAction(
          cookie
            ? cookie
            : store.value.configReducer.config.Language || 'en'
        ),
        loadSession()
      )
    })
  )
);
