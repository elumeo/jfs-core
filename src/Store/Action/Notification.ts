import * as TA from 'typesafe-actions';
import * as Type from 'Types/Notification';
import { AxiosError } from 'axios';

export const addNotification = TA.createAction('notification/ADD')<Type.Notification>();
export const removeNotification = TA.createAction('notification/REMOVE')<string>();
export const removeNotificationGroup = TA.createAction('notification/REMOVE_GROUP')<string>();
export const removeAllNotifications = TA.createAction('notification/REMOVE_ALL')();
export const addErrorNotification = TA.createAction('notification/ERROR_ADD')<AxiosError>();

export const setIsNotificationHistoryOpen = TA.createAction('notification/SET_IS_HISTORY_OPEN')<boolean>();
