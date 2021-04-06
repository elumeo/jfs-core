import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { AxiosError } from 'axios';

export const addNotification = (
  TA.createStandardAction('notification/ADD')<Type.Notification>()
);
export const removeNotification = TA.createStandardAction('notification/remove')<string>()
export const removeAllNotifications = TA.createStandardAction('notification/remove_all')()
export const catchErrorNotification = TA.createStandardAction('notification/ERROR_ADD')<AxiosError>()

export const setIsNotificationHistoryOpen = (
  TA.createStandardAction('notification/SET_IS_HISTORY_OPEN')<boolean>()
);
