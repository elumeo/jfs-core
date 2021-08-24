import * as TA from 'typesafe-actions';
export const addNotification = TA.createAction('notification/ADD')();
export const removeNotification = TA.createAction('notification/remove')();
export const removeAllNotifications = TA.createAction('notification/remove_all')();
export const addErrorNotification = TA.createAction('notification/ERROR_ADD')();
export const setIsNotificationHistoryOpen = TA.createAction('notification/SET_IS_HISTORY_OPEN')();
