// noinspection TypeScriptPreferShortImport
import {
  addNotificationWithIdAction,
  dismissAllNotificationsAction,
  dismissNotificationAction,
  dismissNotificationByGroupIdAction,
  fadeNotificationOffScreenAction,
  hideNotificationDrawerAction,
  pinNotificationDrawerAction,
  showNotificationDrawerAction,
  unpinNotificationDrawerAction
} from 'Action/NotificationAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { getPlainText } from 'Component/Notification/NotificationCard';
import { INotification } from 'Types/Notification';
import { NOTIFICATION_LIMIT } from 'Constant/Notification';

namespace Notification {
  export type State = {
    notifications?: INotification[];
    dismissAnimationClassName?: string;
    notificationDrawerVisible?: boolean;
    notificationDrawerPinned?: boolean;
  }
}

const initialState: Notification.State = {
  notifications: [],
  dismissAnimationClassName: 'disappear',
  notificationDrawerVisible: false,
  notificationDrawerPinned: false,
};

const Notification = createReducer(initialState)
  .handleAction(addNotificationWithIdAction, (state: Notification.State, { payload: notification }: PayloadAction<string, INotification>): Notification.State => {
    const notifications = [...state.notifications];
    const isDuplicate = notifications.length > 0 && getPlainText(notification) == getPlainText(notifications[0]);
    if (isDuplicate) {
      notifications[0].id = notification.id;
      notifications[0].count++;
      notifications[0].timestamp = new Date();
      notifications[0].onScreen = true;
      return { ...state, notifications };
    } else {
      if (notifications.length > NOTIFICATION_LIMIT) {
        notifications.pop();
      }
      return {
        ...state,
        notifications: [{ ...notification, onScreen: true }, ...state.notifications]
      };
    }
  })
  .handleAction(fadeNotificationOffScreenAction, (state: Notification.State, { payload: id }: PayloadAction<string, number>): Notification.State => (
    {
      ...state,
      dismissAnimationClassName: 'fadeout',
      notifications: state.notifications.map(n => ({ ...n, onScreen: n.id == id ? false : n.onScreen }))
    }
  ))
  .handleAction(dismissNotificationAction, (state: Notification.State, { payload: id }: PayloadAction<string, number>): Notification.State => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible };
  })
  .handleAction(dismissNotificationByGroupIdAction, (state: Notification.State, { payload: groupId }: PayloadAction<string, string>): Notification.State => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible };
  })
  .handleAction(dismissAllNotificationsAction, (state: Notification.State): Notification.State => (
    {
      ...state,
      dismissAnimationClassName: 'disappear',
      notifications: state.notifications.filter(n => n.dismissButtonVisible === false)
    }
  ))
  .handleAction(showNotificationDrawerAction, (state: Notification.State): Notification.State => (
    { ...state, notificationDrawerVisible: true }
  ))
  .handleAction(hideNotificationDrawerAction, (state: Notification.State): Notification.State => (
    { ...state, notificationDrawerVisible: false }
  ))
  .handleAction(pinNotificationDrawerAction, (state: Notification.State): Notification.State => (
    { ...state, notificationDrawerPinned: true }
  ))
  .handleAction(unpinNotificationDrawerAction, (state: Notification.State): Notification.State => (
    { ...state, notificationDrawerPinned: false }
  ));

export default Notification;
