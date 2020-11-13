import React from 'react';
// noinspection TypeScriptPreferShortImport,ES6PreferShortImport
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
} from '../Action/NotificationAction';
import { createReducer, PayloadAction } from 'typesafe-actions';
import { AxiosError } from 'axios';
// noinspection TypeScriptPreferShortImport,ES6PreferShortImport
import { getPlainText, INotificationCardProps } from '../../Component/Notification/NotificationCard';
import { PrimitiveType } from 'intl-messageformat';

export interface INotificationContent {
  error?: Error | AxiosError | any;
  message?: string | string[];
  translationId?: string | string[];
  translationValues?: Record<string, PrimitiveType>;

  icon?: string;
  isError?: boolean;
  isSuccess?: boolean;
  stayOnScreen?: boolean;
  groupId?: string;

  onClick?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
  onMount?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  dismissButtonVisible?: boolean;
  onDismiss?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  hideButtonVisible?: boolean;
  onHide?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  customActionTooltipTranslationId?: string;
  customActionIconName?: string;
  onCustomAction?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
}

export interface INotification extends INotificationContent {
  id: number;
  onScreen?: boolean;
  count: number;
  timestamp: Date;
  autoHideDelay: number;
}

export interface INotificationReducerState {
  notifications?: INotification[];
  dismissAnimationClassName?: string;
  notificationDrawerVisible?: boolean;
  notificationDrawerPinned?: boolean;
}

const initialState: INotificationReducerState = {
  notifications: [],
  dismissAnimationClassName: 'disappear',
  notificationDrawerVisible: false,
  notificationDrawerPinned: false,
};

export const NOTIFICATION_LIMIT: number = 123;

export const notificationReducer = createReducer(initialState)
  .handleAction(addNotificationWithIdAction, (state: INotificationReducerState, { payload: notification }: PayloadAction<string, INotification>): INotificationReducerState => {
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
  .handleAction(fadeNotificationOffScreenAction, (state: INotificationReducerState, { payload: id }: PayloadAction<string, number>): INotificationReducerState => (
    {
      ...state,
      dismissAnimationClassName: 'fadeout',
      notifications: state.notifications.map(n => ({ ...n, onScreen: n.id == id ? false : n.onScreen }))
    }
  ))
  .handleAction(dismissNotificationAction, (state: INotificationReducerState, { payload: id }: PayloadAction<string, number>): INotificationReducerState => {
    const notifications = state.notifications.filter(n => n.id != id);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible };
  })
  .handleAction(dismissNotificationByGroupIdAction, (state: INotificationReducerState, { payload: groupId }: PayloadAction<string, string>): INotificationReducerState => {
    const notifications = state.notifications.filter(n => n.groupId != groupId);
    const notificationDrawerVisible = !state.notificationDrawerPinned && notifications.length == 0 ? false : state.notificationDrawerVisible;
    return { ...state, notifications, dismissAnimationClassName: 'disappear', notificationDrawerVisible };
  })
  .handleAction(dismissAllNotificationsAction, (state: INotificationReducerState): INotificationReducerState => (
    {
      ...state,
      dismissAnimationClassName: 'disappear',
      notifications: state.notifications.filter(n => n.dismissButtonVisible === false)
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
