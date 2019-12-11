import { combineEpics } from 'redux-observable';

import { initializeAppEpic } from './AppEpic';
import {
  loadSessionEpic,
  checkSessionEpic,
  authorizeSessionEpic, unauthorizeSessionEpic,
  logoutEpic,
  beforeLogoutHookEpic,
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

export const defaultHooks = {
  beforeLogoutHook: <R>(action, store): Observable<R> => {
    return EMPTY;
  }
};

export const createCombineEpics = (hooks = defaultHooks) => (...epics) => wrappedCombineEpics(
  beforeLogoutHookEpic(hooks.beforeLogoutHook),
  ...epics
);

export default wrappedCombineEpics;
