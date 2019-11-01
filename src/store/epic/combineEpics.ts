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
import { autoLoadConfigEpic, loadConfigEpic } from './ConfigEpic';

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
    loadConfigEpic,
    autoLoadConfigEpic,
    logoutEpic,
    robotLoginEpic,
    splitViewEpic,
    ...epics
  );
}
