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
  webSocketCheckSessionIsAuthorizedEpic,
  webSocketConnectRequestEpic, webSocketConnectSuccessEpic, webSocketJoinRoomLoadingEpic,
  webSocketJoinRoomRequestEpic,
  // webSocketJoinRoomSuccessEpic,
  webSocketLeaveRoomRequestEpic
} from './WebSocketEpic';
import { setInitialLanguageEpic } from './LanguageEpic';
import { EMPTY } from 'rxjs';

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
  webSocketCheckSessionIsAuthorizedEpic,
  webSocketConnectRequestEpic,
  webSocketJoinRoomRequestEpic,
  webSocketJoinRoomLoadingEpic,
  webSocketLeaveRoomRequestEpic,
  webSocketConnectSuccessEpic,
  ...epics
)

export const defaultHooks = {
  beforeLogoutHook: (action, store) => {
    return EMPTY;
  },
  afterLogoutHook: (action, store) => {
    return EMPTY;
  }
}

export const createCombineEpics = (hooks = defaultHooks) => (...epics) => wrappedCombineEpics(
  beforeLogoutHookEpic(hooks.beforeLogoutHook),
  afterLogoutHookEpic(hooks.afterLogoutHook),
  ...epics
)

export default createCombineEpics();
