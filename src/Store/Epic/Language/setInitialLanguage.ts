import { concatMap, filter } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';
import * as Type from 'Types/Language';

const setInitialLanguage: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(Action.configLoadedAction)),
    concatMap(({ payload: { config } }) => [
      Action.changeLanguageAction(
        state$.value.Core.Language.language ||
        (Cookie.get('lang') as Type.Language) ||
        config.Language ||
        'en',
      )
    ])
  );

export default setInitialLanguage
