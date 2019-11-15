import { createAction } from 'typesafe-actions';
import { INotificationContent, INotification } from '../reducer/NotificationReducer';

const featureName = 'notification';

export const addNotificationAction = createAction(featureName + '/ADD')<INotificationContent>();
export const addNotificationWithIdAction = createAction(featureName + '/withId/ADD')<INotification>();
export const fadeNotificationOffScreenAction = createAction(featureName + '/FADE_OUT')<number>();
export const dismissNotificationAction = createAction(featureName + '/DELETE')<number>();
export const dismissAllNotificationsAction = createAction(featureName + '/DELETE_ALL')();
export const dismissNextNotificationAction = createAction(featureName + '/DELETE_NEXT')();
export const toggleNotificationDrawerAction = createAction(featureName + '/drawer/TOGGLE')();
export const showNotificationDrawerAction = createAction(featureName + '/drawer/SHOW')();
export const hideNotificationDrawerAction = createAction(featureName + '/drawer/HIDE')();
export const pinNotificationDrawerAction = createAction(featureName + '/drawer/PIN')();
export const unpinNotificationDrawerAction = createAction(featureName + '/drawer/UNPIN')();
