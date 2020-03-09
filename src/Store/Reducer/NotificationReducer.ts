import {
  addNotificationWithIdAction,
  dismissAllNotificationsAction,
  dismissNextNotificationAction,
  dismissNotificationAction, dismissNotificationByGroupIdAction,
  fadeNotificationOffScreenAction,
  hideNotificationDrawerAction,
  pinNotificationDrawerAction,
  showNotificationDrawerAction,
  unpinNotificationDrawerAction
} from '../Action/NotificationAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { AxiosError } from 'axios';

export interface INotificationContent {
  error?: Error | AxiosError;
  message?: string;
  translationId?: string;

  icon?: string;
  isError?: boolean;
  stayOnScreen?: boolean;
  groupId?: string;

  onClick?: (notification: INotification) => void;
  onMount?: (notification: INotification) => void;

  dismissLabelTranslationId?: string;
  onDismiss?: (notification: INotification) => void;
  customActionLabelTranslationId?: string;
  onCustomAction?: (notification: INotification) => void;
}

export interface INotification extends INotificationContent {
  id: number;
  count: number;
  timestamp: Date;
  onScreen?: boolean;
  autoHideDelay: number;
}

export interface INotificationReducerState {
  notifications?: INotification[];
  notificationDrawerVisible?: boolean;
  notificationDrawerPinned?: boolean;
  notificationDismissCounter?: number;
}

const initialState: INotificationReducerState = {
  notifications: [],
  notificationDrawerVisible: false,
  notificationDrawerPinned: false,
  notificationDismissCounter: -1
};

export const NOTIFICATION_LIMIT: number = 123;
export const NOTIFICATION_DISMISS_ALL_ANIMATION_LIMIT: number = 20;

export const notificationReducer = createReducer(initialState)
  .handleAction(addNotificationWithIdAction, (state: INotificationReducerState, { payload: notification }: PayloadAction<string, INotification>): INotificationReducerState => {
    const notifications = [...state.notifications];
    const sameTranslationId = notifications.length > 0 && !(!notification.translationId) && !(!notifications[0].translationId)
      && notification.translationId == notifications[0].translationId;
    const sameMessage = notifications.length > 0 && !(!notification.message) && !(!notifications[0].message)
      && notification.message == notifications[0].message;
    const sameError = notifications.length > 0 && !(!notification.error) && !(!notifications[0].error)
      && notification.error.message == notifications[0].error.message
      && notification.error.name == notifications[0].error.name;
    if (sameMessage || sameTranslationId || sameError) {
      notifications[0].id = notification.id;
      notifications[0].count++;
      notifications[0].timestamp = new Date();
      notifications[0].onScreen = true;
      return { ...state, notifications, notificationDismissCounter: -1 };
    } else {
      if (notifications.length > NOTIFICATION_LIMIT) {
        notifications.pop();
      }
      return {
        ...state,
        notifications: [{ ...notification, onScreen: true }, ...state.notifications],
        notificationDismissCounter: -1
      };
    }
  })
  .handleAction(fadeNotificationOffScreenAction, (state: INotificationReducerState, { payload: id }: PayloadAction<string, number>): INotificationReducerState => (
    {
      ...state,
      notifications: state.notifications.map(n => ({ ...n, onScreen: n.id == id ? false : n.onScreen }))
    }
  ))
  .handleAction(dismissNotificationAction, (state: INotificationReducerState, { payload: id }: PayloadAction<string, number>): INotificationReducerState => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, notificationDrawerVisible };
  })
  .handleAction(dismissNotificationByGroupIdAction, (state: INotificationReducerState, { payload: groupId }: PayloadAction<string, string>): INotificationReducerState => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, notificationDrawerVisible };
  })
  .handleAction(dismissAllNotificationsAction, (state: INotificationReducerState): INotificationReducerState => (
    { ...state, notificationDismissCounter: 1 }
  ))
  .handleAction(dismissNextNotificationAction, (state: INotificationReducerState): INotificationReducerState => (
    {
      ...state,
      notificationDismissCounter: state.notificationDismissCounter + 1,
      notifications: state.notificationDismissCounter > NOTIFICATION_DISMISS_ALL_ANIMATION_LIMIT ? [] : state.notifications.filter((n, i) => i != 0),
    }
  ))
  .handleAction(showNotificationDrawerAction, (state: INotificationReducerState): INotificationReducerState => (
    { ...state, notificationDrawerVisible: true }
  ))
  .handleAction(hideNotificationDrawerAction, (state: INotificationReducerState): INotificationReducerState => (
    { ...state, notificationDrawerVisible: false }
  ))
  .handleAction(pinNotificationDrawerAction, (state: INotificationReducerState): INotificationReducerState => (
    { ...state, notificationDrawerPinned: true }
  ))
  .handleAction(unpinNotificationDrawerAction, (state: INotificationReducerState): INotificationReducerState => (
    { ...state, notificationDrawerPinned: false }
  ))
;
