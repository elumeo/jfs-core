import {
  addNotificationWithIdAction,
  dismissAllNotificationsAction,
  dismissNextNotificationAction,
  dismissNotificationAction,
  fadeNotificationOffScreenAction,
  hideNotificationDrawerAction,
  pinNotificationDrawerAction,
  showNotificationDrawerAction,
  unpinNotificationDrawerAction
} from '../action/NotificationAction';
import { createReducer, PayloadAction } from "typesafe-actions";

export interface INotificationContent {
  error?: Error;
  message?: string;
  translationId?: string;

  icon?: string;
  isError?: boolean;
  onClick?: (n: INotification) => void;
}

export interface INotification extends INotificationContent {
  id: number;
  onScreen?: boolean;
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

// noinspection JSUnusedGlobalSymbols,TypeScriptValidateJSTypes
export const notificationReducer = createReducer(initialState)
  .handleAction(addNotificationWithIdAction, (state: INotificationReducerState, action: PayloadAction<string, INotification>): INotificationReducerState => {
    const notifications = [{ ...action.payload, onScreen: true }, ...state.notifications];
    if (notifications.length > NOTIFICATION_LIMIT) {
      notifications.pop();
    }
    return { ...state, notifications, notificationDismissCounter: -1 };
  })
  .handleAction(fadeNotificationOffScreenAction, (state: INotificationReducerState, action: PayloadAction<string, number>): INotificationReducerState => (
    {
      ...state,
      notifications: state.notifications.map(n => ({ ...n, onScreen: n.id == action.payload ? false : n.onScreen }))
    }
  ))
  .handleAction(dismissNotificationAction, (state: INotificationReducerState, action: PayloadAction<string, number>): INotificationReducerState => {
    const notifications = state.notifications.filter(n => n.id != action.payload);
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
