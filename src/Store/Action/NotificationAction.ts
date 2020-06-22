import { createStandardAction, PayloadAction } from 'typesafe-actions';
import { INotification, INotificationContent } from 'Types/Notification';

const featureName = 'notification';

export const addNotificationAction
  : (notification: INotificationContent) => PayloadAction<string, INotificationContent>
  = createStandardAction(featureName + '/ADD')<INotificationContent>();
export const addNotificationWithIdAction
  : (notification: INotification) => PayloadAction<string, INotification>
  = createStandardAction(featureName + '/withId/ADD')<INotification>();
export const fadeNotificationOffScreenAction
  : (id: number) => PayloadAction<string, number>
  = createStandardAction(featureName + '/FADE_OUT')<number>();
export const dismissNotificationAction
  : (id: number) => PayloadAction<string, number>
  = createStandardAction(featureName + '/DELETE')<number>();
export const dismissNotificationByGroupIdAction
  : (groupId: string) => PayloadAction<string, string>
  = createStandardAction(featureName + '/DELETE_BY_GROUP_ID')();
export const dismissAllNotificationsAction
  = createStandardAction(featureName + '/DELETE_ALL')();
export const dismissNextNotificationAction
  = createStandardAction(featureName + '/DELETE_NEXT')();
export const toggleNotificationDrawerAction
  = createStandardAction(featureName + '/drawer/TOGGLE')();
export const showNotificationDrawerAction
  = createStandardAction(featureName + '/drawer/SHOW')();
export const hideNotificationDrawerAction
  = createStandardAction(featureName + '/drawer/HIDE')();
export const pinNotificationDrawerAction
  = createStandardAction(featureName + '/drawer/PIN')();
export const unpinNotificationDrawerAction
  = createStandardAction(featureName + '/drawer/UNPIN')();
