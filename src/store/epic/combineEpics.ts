import { combineEpics } from 'redux-observable';

import {
  autoSessionCheck,
  checkLoginEpic,
  checkSessionEpic,
  checkUserRightsEpic,
  logoutEpic,
  robotLoginEpic,
} from './SessionEpic';

import { getRegionEpic } from './SystemEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';
import {
  webSocketCheckSessionIsAuthorizedActionEpic,
  webSocketConnectRequestActionEpic,
  webSocketJoinRoomRequestActionEpic, webSocketJoinRoomSuccessActionEpic, webSocketLeaveRoomRequestActionEpic
} from './WebsocketEpic';

// noinspection JSUnusedGlobalSymbols
export default (...epics: any) => {
  return combineEpics(
    webSocketCheckSessionIsAuthorizedActionEpic,
    webSocketConnectRequestActionEpic,
    webSocketJoinRoomRequestActionEpic,
    webSocketJoinRoomSuccessActionEpic,
    webSocketLeaveRoomRequestActionEpic,
    addNotificationEpic,
    autoSessionCheck,
    checkLoginEpic,
    checkSessionEpic,
    checkUserRightsEpic,
    dismissAllNotificationsEpic,
    getRegionEpic,
    logoutEpic,
    robotLoginEpic,
    splitViewEpic,
    ...epics
  );
}
