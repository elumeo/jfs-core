import { of } from 'rxjs';
import { filter, concatMap, map } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import Cookie from 'js-cookie';
import * as Action from 'Store/Action';
import { Epic } from 'Types/Redux';
import * as Type from 'Types/Language';
import * as Selector from 'Store/Selector';

const setInitialLanguage: Epic = (action$, state$) =>
  action$.pipe(
    filter(isActionOf(Action.setPublicKey)),
    map(() => ({
      config: Selector.Configuration.Configuration(state$.value)
    })),
    concatMap(({ config }) => [
        Action.changeLanguageAction(
          state$.value.Core.Language.language
          || (Cookie.get('lang') as Type.Language)
          || config.Language
          || 'en',
        ),
        Action.loadSession(),
      ],
    ),
  );

export default setInitialLanguage;
