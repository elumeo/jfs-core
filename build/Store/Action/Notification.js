import * as TA from 'typesafe-actions';
export const addNotification = (TA.createStandardAction('notification/ADD')());
export const removeNotification = TA.createStandardAction('notification/remove')();
export const removeAllNotifications = TA.createStandardAction('notification/remove_all')();
export const catchErrorNotification = TA.createStandardAction('notification/ERROR_ADD')();
//# sourceMappingURL=Notification.js.map