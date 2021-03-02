import { createStandardAction } from 'typesafe-actions';
export const addNotificationAction = createStandardAction('notification/ADD')();
export const addNotificationWithIdAction = createStandardAction('notification/withId/ADD')();
export const fadeNotificationOffScreenAction = createStandardAction('notification/FADE_OUT')();
export const dismissNotificationAction = createStandardAction('notification/DELETE')();
export const dismissNotificationByGroupIdAction = createStandardAction('notification/DELETE_BY_GROUP_ID')();
export const dismissAllNotificationsAction = createStandardAction('notification/DELETE_ALL')();
export const dismissNextNotificationAction = createStandardAction('notification/DELETE_NEXT')();
export const toggleNotificationDrawerAction = createStandardAction('notification/drawer/TOGGLE')();
export const showNotificationDrawerAction = createStandardAction('notification/drawer/SHOW')();
export const hideNotificationDrawerAction = createStandardAction('notification/drawer/HIDE')();
export const pinNotificationDrawerAction = createStandardAction('notification/drawer/PIN')();
export const unpinNotificationDrawerAction = createStandardAction('notification/drawer/UNPIN')();
//# sourceMappingURL=NotificationAction.js.map