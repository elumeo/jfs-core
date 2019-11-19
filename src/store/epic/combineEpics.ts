import { combineEpics } from 'redux-observable';

import { initializeAppEpic } from './AppEpic';
import {
  loadSessionEpic,
  checkSessionEpic,
  authorizeSessionEpic, unauthorizeSessionEpic,
  logoutEpic,
} from './SessionEpic';
import { getRegionEpic } from './SystemEpic';
import { loginEpic } from './LoginEpic';
import { loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';

import {
  webSocketCheckSessionIsAuthorizedEpic,
  webSocketConnectRequestEpic, webSocketJoinRoomLoadingEpic,
  webSocketJoinRoomRequestEpic,
  webSocketJoinRoomSuccessEpic,
  webSocketLeaveRoomRequestEpic
} from './WebsocketEpic';
import { setInitialLanguageEpic } from './LanguageEpic';

export default (...epics: any) => combineEpics(
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
  webSocketJoinRoomSuccessEpic,
  webSocketLeaveRoomRequestEpic,
  ...epics
);
