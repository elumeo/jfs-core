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
import { autoLoadConfigEpic, loadConfigEpic } from './ConfigEpic';
import { addNotificationEpic, dismissAllNotificationsEpic, splitViewEpic } from "./NotificationEpic";

// noinspection JSUnusedGlobalSymbols
export default (...epics: any) => {
  return combineEpics(
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
