import { createStandardAction } from 'typesafe-actions';
import { INotificationContent, INotification } from '../Reducer/NotificationReducer';

const featureName = 'notification';

export const addNotificationAction = createStandardAction(featureName + '/ADD')<INotificationContent>();
export const addNotificationWithIdAction = createStandardAction(featureName + '/withId/ADD')<INotification>();
export const fadeNotificationOffScreenAction = createStandardAction(featureName + '/FADE_OUT')<number>();
export const dismissNotificationAction = createStandardAction(featureName + '/DELETE')<number>();
export const dismissAllNotificationsAction = createStandardAction(featureName + '/DELETE_ALL')();
export const dismissNextNotificationAction = createStandardAction(featureName + '/DELETE_NEXT')();
export const toggleNotificationDrawerAction = createStandardAction(featureName + '/drawer/TOGGLE')();
export const showNotificationDrawerAction = createStandardAction(featureName + '/drawer/SHOW')();
export const hideNotificationDrawerAction = createStandardAction(featureName + '/drawer/HIDE')();
export const pinNotificationDrawerAction = createStandardAction(featureName + '/drawer/PIN')();
export const unpinNotificationDrawerAction = createStandardAction(featureName + '/drawer/UNPIN')();
