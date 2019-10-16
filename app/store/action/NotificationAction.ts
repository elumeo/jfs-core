import { createStandardAction } from "typesafe-actions";
import { INotificationContent, INotification } from "../reducer/NotificationReducer";

export const addNotificationAction = createStandardAction('notification/ADD')<INotificationContent>();
export const addNotificationWithIdAction = createStandardAction('notification/withId/ADD')<INotification>();
export const fadeNotificationOffScreenAction = createStandardAction('notification/FADE_OUT')<number>();
export const dismissNotificationAction = createStandardAction('notification/DELETE')<number>();
export const dismissAllNotificationsAction = createStandardAction('notification/DELETE_ALL')();
export const dismissNextNotificationAction = createStandardAction('notification/DELETE_NEXT')();
export const toggleNotificationDrawerAction = createStandardAction('notification/drawer/TOGGLE')();
export const toggleNotificationDrawerPinnedAction = createStandardAction('notification/drawer/pinned/TOGGLE')();
