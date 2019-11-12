import { combineEpics } from 'redux-observable';

import { initializeAppEpic } from './AppEpic';
import { logoutEpic, authorizeSessionEpic, loadSessionEpic, loginEpic, checkSessionEpic, unauthorizeSessionEpic, } from './SessionEpic';
import { getRegionEpic } from './SystemEpic';
import { loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';

import {
  webSocketCheckSessionIsAuthorizedActionEpic,
  webSocketConnectRequestActionEpic,
  webSocketJoinRoomRequestActionEpic,
  webSocketJoinRoomSuccessActionEpic,
  webSocketLeaveRoomRequestActionEpic,
} from './WebsocketEpic';

// noinspection JSUnusedGlobalSymbols
export default (...epics: any) => combineEpics(
  addNotificationEpic,
  initializeAppEpic,
  dismissAllNotificationsEpic,
  getRegionEpic,
  loadConfigEpic,
  logoutEpic,
  splitViewEpic,
  loadSessionEpic,
  checkSessionEpic,
  loginEpic,
  authorizeSessionEpic,
  unauthorizeSessionEpic,
  webSocketCheckSessionIsAuthorizedActionEpic,
  webSocketConnectRequestActionEpic,
  webSocketJoinRoomRequestActionEpic,
  webSocketJoinRoomSuccessActionEpic,
  webSocketLeaveRoomRequestActionEpic,
  ...epics
);
