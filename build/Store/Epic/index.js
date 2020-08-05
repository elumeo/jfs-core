import { combineEpics } from 'redux-observable';
import { EMPTY } from 'rxjs';
import AppEpic from './AppEpic';
import SessionEpic, { beforeLogoutHookEpic, afterLogoutHookEpic } from './SessionEpic';
import SystemEpic from './SystemEpic';
import LoginEpic from './LoginEpic';
import ConfigurationEpic from './ConfigEpic';
import NotificationEpic from './NotificationEpic';
import WebSocketEpic from './WebSocketEpic';
import LanguageEpic from './LanguageEpic';
export const wrappedCombineEpics = (...epics) => combineEpics(LoginEpic, NotificationEpic, AppEpic, SystemEpic, ConfigurationEpic, SessionEpic, LanguageEpic, WebSocketEpic, ...epics);
export const defaultHooks = {
    beforeLogoutHook: () => EMPTY,
    afterLogoutHook: () => EMPTY
};
export const createCombineEpics = (hooks = {}) => (...epics) => wrappedCombineEpics(beforeLogoutHookEpic(hooks.beforeLogoutHook || defaultHooks.beforeLogoutHook), afterLogoutHookEpic(hooks.afterLogoutHook || defaultHooks.afterLogoutHook), ...epics);
export default createCombineEpics();
//# sourceMappingURL=index.js.map