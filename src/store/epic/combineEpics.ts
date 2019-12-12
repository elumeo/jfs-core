import { combineEpics } from 'redux-observable';

import { initializeAppEpic } from './AppEpic';
import {
  loadSessionEpic,
  checkSessionEpic,
  authorizeSessionEpic, unauthorizeSessionEpic,
  logoutEpic,
  beforeLogoutHookEpic,
  afterLogoutHookEpic,
} from './SessionEpic';
import { getRegionEpic } from './SystemEpic';
import { loginEpic, robotLoginRefreshEpic } from './LoginEpic';
import { loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';

import {
  webSocketAppIsInitializedEpic,
  webSocketCheckForConnectionErrorEpic,
  webSocketCheckForReconnectEpic,
  webSocketConnectRequestEpic,
  webSocketConnectSuccessEpic,
  webSocketDisconnectRequestEpic,
  webSocketJoinRoomLoadingEpic,
  webSocketJoinRoomRequestEpic,
  webSocketLeaveRoomRequestEpic,
  webSocketLogoutEpic
} from './WebSocketEpic';
import { setInitialLanguageEpic } from './LanguageEpic';
import { Observable, EMPTY } from 'rxjs';

export const wrappedCombineEpics = (...epics) => combineEpics(
  robotLoginRefreshEpic,
  loginEpic,
  addNotificationEpic,
  initializeAppEpic,
  dismissAllNotificationsEpic,
  getRegionEpic,
  loadConfigEpic,
  logoutEpic,
  setInitialLanguageEpic,
  splitViewEpic,
  loadSessionEpic,
  checkSessionEpic,
  authorizeSessionEpic,
  unauthorizeSessionEpic,
  webSocketAppIsInitializedEpic,
  webSocketConnectRequestEpic,
  webSocketConnectSuccessEpic,
  webSocketJoinRoomRequestEpic,
  webSocketJoinRoomLoadingEpic,
  webSocketLeaveRoomRequestEpic,
  webSocketLogoutEpic,
  webSocketDisconnectRequestEpic,
  webSocketCheckForConnectionErrorEpic,
  webSocketCheckForReconnectEpic,
  ...epics
);

export type Hook = <R>(action, store) => Observable<R>;

export interface IAppHooks {
  beforeLogoutHook: Hook;
  afterLogoutHook: Hook;
}

export const defaultHooks: IAppHooks = {
  beforeLogoutHook: (action, store) => {
    return EMPTY;
  },
  afterLogoutHook: (action, store) => {
    return EMPTY;
  }
};

export const createCombineEpics = (hooks = defaultHooks) => (...epics) => wrappedCombineEpics(
  beforeLogoutHookEpic(hooks.beforeLogoutHook),
  afterLogoutHookEpic(hooks.afterLogoutHook),
  ...epics
);

export default createCombineEpics();
