import { combineEpics } from 'redux-observable';

import { initializeAppEpic } from './AppEpic';
import {
  afterLogoutHookEpic,
  authorizeSessionEpic,
  beforeLogoutHookEpic,
  checkSessionEpic,
  loadSessionEpic,
  logoutEpic,
  unauthorizeSessionEpic,
} from './SessionEpic';
import { getRegionEpic } from './SystemEpic';
import { loginEpic, robotLoginRefreshEpic } from './LoginEpic';
import { loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, splitViewEpic } from './NotificationEpic';

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
import LanguageEpic from './LanguageEpic';
import { EMPTY, Observable } from 'rxjs';
import Shared from '../../Shared';

export const wrappedCombineEpics = (...epics) => combineEpics(
  robotLoginRefreshEpic,
  loginEpic,
  addNotificationEpic,
  initializeAppEpic,
  getRegionEpic,
  loadConfigEpic,
  logoutEpic,
  LanguageEpic,
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
  ...epics,
  Shared.Epic()
);

export type Hook = <R>(action, store) => Observable<R>;

export interface IAppHooks {
  beforeLogoutHook?: Hook;
  afterLogoutHook?: Hook;
}

export const defaultHooks: IAppHooks = {
  beforeLogoutHook: () => EMPTY,
  afterLogoutHook: () => EMPTY
};

export const createCombineEpics = (hooks: IAppHooks = {}) => (...epics) => wrappedCombineEpics(
  beforeLogoutHookEpic(hooks.beforeLogoutHook || defaultHooks.beforeLogoutHook),
  afterLogoutHookEpic(hooks.afterLogoutHook || defaultHooks.afterLogoutHook),
  ...epics
);

export default createCombineEpics();
