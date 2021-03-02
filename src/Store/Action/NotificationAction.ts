import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { INotification, INotificationContent } from 'Types/Notification';

export const addNotificationAction
  : (notification: INotificationContent) => PayloadAction<string, INotificationContent>
  = createStandardAction('notification/ADD')<INotificationContent>();
export const addNotificationWithIdAction
  : (notification: INotification) => PayloadAction<string, INotification>
  = createStandardAction('notification/withId/ADD')<INotification>();
export const fadeNotificationOffScreenAction
  : (id: number) => PayloadAction<string, number>
  = createStandardAction('notification/FADE_OUT')<number>();
export const dismissNotificationAction
  : (id: number) => PayloadAction<string, number>
  = createStandardAction('notification/DELETE')<number>();
export const dismissNotificationByGroupIdAction
  : (groupId: string) => PayloadAction<string, string>
  = createStandardAction('notification/DELETE_BY_GROUP_ID')();
export const dismissAllNotificationsAction
  = createStandardAction('notification/DELETE_ALL')();
export const dismissNextNotificationAction
  = createStandardAction('notification/DELETE_NEXT')();
export const toggleNotificationDrawerAction
  = createStandardAction('notification/drawer/TOGGLE')();
export const showNotificationDrawerAction
  = createStandardAction('notification/drawer/SHOW')();
export const hideNotificationDrawerAction
  = createStandardAction('notification/drawer/HIDE')();
export const pinNotificationDrawerAction
  = createStandardAction('notification/drawer/PIN')();
export const unpinNotificationDrawerAction
  = createStandardAction('notification/drawer/UNPIN')();
