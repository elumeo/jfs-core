import { combineEpics } from 'redux-observable';
import App from './App';
import Configuration from './Configuration';
import Language from './Language';
import Login from './Login';
import Locale from './Locale';
import Session from './Session';
import System from './System';
import WebSocket from './WebSocket';
import Notification from './Notification';
import { Epic } from 'Types/Redux';
import * as Selector from 'Store/Selector/Core'
import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();

export const wrap = (
  epic: Epic,
  wrapper: (action$: ReturnType<Epic>) => ReturnType<Epic>,
): Epic => (action$, state$, dependencies) =>
    wrapper(
      epic(action$, state$, {
        ...dependencies,
        intl:
          Selector.translationLanguage(state$.value)//.Core.Language.language
            ? createIntl(
              {
                locale: Selector.translationLanguage(state$.value),
                messages: (Selector.translations(state$.value)[
                  Selector.translationLanguage(state$.value)
                ] as unknown) as Record<string, string>,
              },
              cache,
            )
            : null,
      }),
    );

const Core = combineEpics(
  App,
  Session,
  System,
  Login,
  Locale,
  Configuration,
  WebSocket,
  Language,
  Notification,
);

export default Core;
