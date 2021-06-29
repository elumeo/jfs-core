import * as TA from 'typesafe-actions';
export const addNotification = (TA.createStandardAction('notification/ADD')());
export const removeNotification = TA.createStandardAction('notification/remove')();
export const removeAllNotifications = TA.createStandardAction('notification/remove_all')();
export const addErrorNotification = TA.createStandardAction('notification/ERROR_ADD')();
export const setIsNotificationHistoryOpen = (TA.createStandardAction('notification/SET_IS_HISTORY_OPEN')());
