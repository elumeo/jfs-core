import React,{ReactText} from 'react';
import { AxiosError } from 'axios';
import { INotificationCardProps } from 'Component/Notification/NotificationCard';
// import { PrimitiveType } from 'react-intl';

export interface INotificationContent {
  error?: Error | AxiosError | any;
  message?: string | string[];
  translationId?: string | string[];
  translationValues?: Record<string, ReactText>;

  icon?: string;
  isError?: boolean;
  isWarning?: boolean;
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
  customActionTooltipTranslationValues?: Record<string, ReactText>;
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
