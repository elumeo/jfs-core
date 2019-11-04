import { combineEpics } from 'redux-observable';

import { checkRightsEpic, logoutEpic, sessionAuthorizeEpic, loggerEpic, } from './SessionEpic';

import { getRegionEpic } from './SystemEpic';
import { autoLoadConfigEpic, loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from "./NotificationEpic";

import {
  webSocketCheckSessionIsAuthorizedActionEpic,
  webSocketConnectRequestActionEpic,
  webSocketJoinRoomRequestActionEpic,
  webSocketJoinRoomSuccessActionEpic,
  webSocketLeaveRoomRequestActionEpic,
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
    loggerEpic,
    logoutEpic,
    splitViewEpic,
    sessionAuthorizeEpic,
    webSocketCheckSessionIsAuthorizedActionEpic,
    webSocketConnectRequestActionEpic,
    webSocketJoinRoomRequestActionEpic,
    webSocketJoinRoomSuccessActionEpic,
    webSocketLeaveRoomRequestActionEpic,
    ...epics
  );
}
