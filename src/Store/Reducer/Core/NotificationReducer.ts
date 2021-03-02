import * as Action from 'Store/Action';
import * as TA from 'typesafe-actions';
import { getPlainText } from 'Component/Notification/NotificationCard';
import { INotification } from 'Types/Notification';
import { NOTIFICATION_LIMIT } from 'Constant/Notification';
import { ActionType } from 'Types/Redux';

export type State = {
  notifications?: INotification[];
  dismissAnimationClassName?: string;
  notificationDrawerVisible?: boolean;
  notificationDrawerPinned?: boolean;
}

const initialState: State = {
  notifications: [],
  dismissAnimationClassName: 'disappear',
  notificationDrawerVisible: false,
  notificationDrawerPinned: false,
};

const Notification = TA.createReducer<State, ActionType>(initialState)
  .handleAction(Action.dismissNotificationAction, (state, { payload: id }) => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return {
      ...state,
      notifications,
      dismissAnimationClassName: 'disappear',
      notificationDrawerVisible
    };
  })
  .handleAction(Action.dismissNotificationByGroupIdAction, (state, { payload: groupId }) => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible };
  })
  .handleAction(Action.dismissAllNotificationsAction, state => (
    {
      ...state,
      dismissAnimationClassName: 'disappear',
      notifications: state.notifications.filter(n => n.dismissButtonVisible === false)
    }
  ))
  .handleAction(Action.showNotificationDrawerAction, state => (
    { ...state, notificationDrawerVisible: true }
  ))
  .handleAction(Action.hideNotificationDrawerAction, state => (
    { ...state, notificationDrawerVisible: false }
  ))
  .handleAction(Action.pinNotificationDrawerAction, state => (
    { ...state, notificationDrawerPinned: true }
  ))
  .handleAction(Action.unpinNotificationDrawerAction, state => (
    { ...state, notificationDrawerPinned: false }
  ))
  .handleAction(Action.addNotificationWithIdAction, (state, { payload: notification }) => {
    const notifications = [...state.notifications];
    const isDuplicate = notifications.length > 0 && getPlainText(notification) == getPlainText(notifications[0]);
    if (isDuplicate) {
      notification.count = notifications[0].count + 1;
      notification.onScreen = true;
      notifications[0] = notification;
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
  // @ts-ignore
  .handleAction(Action.fadeNotificationOffScreenAction, (state, { payload: id }) => ({
    ...state,
    dismissAnimationClassName: 'fadeout',
    notifications: state.notifications.map(n => ({ ...n, onScreen: n.id == id ? false : n.onScreen }))
  }));

export default Notification;
