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
import { createIntl, createIntlCache } from 'react-intl';
const cache = createIntlCache();
export const wrap = (epic, wrapper) => (action$, state$, dependencies) => wrapper(epic(action$, state$, Object.assign(Object.assign({}, dependencies), { intl: () => state$.value.Core.Language.language
        ? createIntl({
            locale: state$.value.Core.Language.language,
            messages: state$.value.Core.Language.messages[state$.value.Core.Language.language],
        }, cache)
        : null })));
const Core = combineEpics(App, Session, System, Login, Locale, Configuration, WebSocket, Language, Notification);
export default Core;
