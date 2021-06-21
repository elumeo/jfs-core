import { of } from 'rxjs';
import { filter, concatMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';
import * as Type from 'Types/Language';

const setInitialLanguage: Epic = (action$, state$) => action$.pipe(
  filter(isActionOf(Action.configLoadedAction)),
  concatMap(({ payload: { config } }) => of(
    Action.changeLanguageAction(
      state$.value.Core.Language.language ||
      Cookie.get('lang') as Type.Language ||
      config.Language ||
      'en'
    ),
    Action.loadSession()
  ))
);

export default setInitialLanguage;
