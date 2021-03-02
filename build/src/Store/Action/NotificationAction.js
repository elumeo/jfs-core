import { createStandardAction } from 'typesafe-actions';
const featureName = 'notification';
export const addNotificationAction = createStandardAction(featureName + '/ADD')();
export const addNotificationWithIdAction = createStandardAction(featureName + '/withId/ADD')();
export const fadeNotificationOffScreenAction = createStandardAction(featureName + '/FADE_OUT')();
export const dismissNotificationAction = createStandardAction(featureName + '/DELETE')();
export const dismissNotificationByGroupIdAction = createStandardAction(featureName + '/DELETE_BY_GROUP_ID')();
export const dismissAllNotificationsAction = createStandardAction(featureName + '/DELETE_ALL')();
export const dismissNextNotificationAction = createStandardAction(featureName + '/DELETE_NEXT')();
export const toggleNotificationDrawerAction = createStandardAction(featureName + '/drawer/TOGGLE')();
export const showNotificationDrawerAction = createStandardAction(featureName + '/drawer/SHOW')();
export const hideNotificationDrawerAction = createStandardAction(featureName + '/drawer/HIDE')();
export const pinNotificationDrawerAction = createStandardAction(featureName + '/drawer/PIN')();
export const unpinNotificationDrawerAction = createStandardAction(featureName + '/drawer/UNPIN')();
//# sourceMappingURL=NotificationAction.js.map