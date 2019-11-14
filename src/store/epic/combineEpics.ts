import { combineEpics } from 'redux-observable';

import { checkRightsEpic, logoutEpic, sessionAuthorizeEpic, } from './SessionEpic';

import { getRegionEpic } from './SystemEpic';
import { autoLoadConfigEpic, loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from './NotificationEpic';

import {
  webSocketCheckSessionIsAuthorizedEpic,
  webSocketConnectRequestEpic,
  webSocketJoinRoomRequestEpic,
  webSocketJoinRoomSuccessEpic,
  webSocketLeaveRoomRequestEpic
} from './WebsocketEpic';

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
    webSocketJoinRoomSuccessEpic,
    webSocketLeaveRoomRequestEpic,
    logoutEpic,
    splitViewEpic,
    sessionAuthorizeEpic,
    ...epics
  );
}
