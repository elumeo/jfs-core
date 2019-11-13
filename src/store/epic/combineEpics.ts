import { combineEpics } from 'redux-observable';

import { checkRightsEpic, logoutEpic, sessionAuthorizeEpic, } from './SessionEpic';

import { getRegionEpic } from './SystemEpic';
import { autoLoadConfigEpic, loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';

import {
  webSocketCheckSessionIsAuthorizedEpic,
  webSocketConnectRequestEpic, webSocketJoinRoomRequestEpic,
  // webSocketJoinRoomRequestEpic,
  // webSocketJoinRoomSuccessActionEpic,
  // webSocketLeaveRoomRequestActionEpic,
} from './WebsocketEpic';

// noinspection JSUnusedGlobalSymbols
export default (...epics: any) => {
  return combineEpics(
    addNotificationEpic,
    autoLoadConfigEpic,
    checkRightsEpic,
    dismissAllNotificationsEpic,
    getRegionEpic,
    loadConfigEpic,
    logoutEpic,
    splitViewEpic,
    sessionAuthorizeEpic,
    webSocketCheckSessionIsAuthorizedEpic,
    webSocketConnectRequestEpic,
    webSocketJoinRoomRequestEpic,
    // webSocketLeaveRoomRequestActionEpic,
    logoutEpic,
    splitViewEpic,
    sessionAuthorizeEpic,
    ...epics
  );
}
