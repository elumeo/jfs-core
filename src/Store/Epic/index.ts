import { combineEpics } from 'redux-observable';
import App from './App';
import Configuration from './Configuration';
import Debug from './Debug';
import Clippy from './Clippy';
import Language from './Language';
import Login from './Login';
import Locale from './Locale';
import Session from './Session';
import Theme from './Theme';
import LocalStorage from './LocalStorage';
import System from './System';
import WebSocket from './WebSocket';
import Notification from './Notification';
import { Epic } from 'Types/Redux';
import { createIntl, createIntlCache } from 'react-intl';

const cache = createIntlCache();

export const wrap = (
  epic: Epic,
  wrapper: (action$: ReturnType<Epic>) => ReturnType<Epic>,
): Epic => (action$, state$, dependencies) =>
    wrapper(
      epic(action$, state$, {
        ...dependencies,
        intl: () =>
          state$.value.Core.Language.language
            ? createIntl(
              {
                locale: state$.value.Core.Language.language,
                messages: (state$.value.Core.Language.messages[
                  state$.value.Core.Language.language
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
  Clippy,
  WebSocket,
  Language,
  Notification,
  LocalStorage,
  Debug,
  Theme
);

export default Core;
