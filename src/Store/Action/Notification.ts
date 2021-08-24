import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { AxiosError } from 'axios';

export const addNotification = TA.createAction('notification/ADD')<
  Type.Notification
>();
export const removeNotification = TA.createAction('notification/remove')<
  string
>();
export const removeAllNotifications = TA.createAction(
  'notification/remove_all',
)();
export const addErrorNotification = TA.createAction('notification/ERROR_ADD')<
  AxiosError
>();

export const setIsNotificationHistoryOpen = TA.createAction(
  'notification/SET_IS_HISTORY_OPEN',
)<boolean>();
