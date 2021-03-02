// import AppEpic from './AppEpic';
// import SessionEpic, { beforeLogoutHookEpic, afterLogoutHookEpic } from './SessionEpic';
// import SystemEpic from './SystemEpic';
// import LoginEpic from './LoginEpic';
// import ConfigurationEpic from './ConfigEpic';
// import NotificationEpic from './NotificationEpic';
// import WebSocketEpic from './WebSocketEpic';
// import LanguageEpic from './LanguageEpic';
// import { Epic } from '../../../Types/Redux';
// import { combineEpics } from 'redux-observable';
// import { Observable, EMPTY } from 'rxjs';
// export const wrappedCombineEpics = (...epics: Epic[]) => combineEpics(
//   LoginEpic,
//   NotificationEpic,
//   AppEpic,
//   SystemEpic,
//   ConfigurationEpic,
//   SessionEpic,
//   LanguageEpic,
//   WebSocketEpic,
//   ...epics
// );
// export type Hook = <R>(action, store) => Observable<R>;
// export interface IAppHooks {
//   beforeLogoutHook?: Hook;
//   afterLogoutHook?: Hook;
// }
// export const defaultHooks: IAppHooks = {
//   beforeLogoutHook: () => EMPTY,
//   afterLogoutHook: () => EMPTY
// };
// export const createCombineEpics = (hooks: IAppHooks = {}) => (...epics) => wrappedCombineEpics(
//   beforeLogoutHookEpic(hooks.beforeLogoutHook || defaultHooks.beforeLogoutHook),
//   afterLogoutHookEpic(hooks.afterLogoutHook || defaultHooks.afterLogoutHook),
//   ...epics
// );
// export default createCombineEpics();
//# sourceMappingURL=Hooks.js.map