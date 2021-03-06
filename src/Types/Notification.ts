import React from 'react';
import { AxiosError } from 'axios';
import { INotificationCardProps } from 'Component/Notification/NotificationCard';
import { PrimitiveType } from 'intl-messageformat';
import { PayloadAction } from 'typesafe-actions';

export interface INotificationContent {
  error?: Error | AxiosError | any;
  message?: string | string[];
  translationId?: string | string[];
  translationValues?: Record<string, PrimitiveType>;

  icon?: string;
  isError?: boolean;
  isWarning?: boolean;
  isSuccess?: boolean;
  stayOnScreen?: boolean;
  groupId?: string;

  onClick?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
  onClickDispatch?: PayloadAction<string, any>[];
  onMount?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  dismissButtonVisible?: boolean;
  onDismiss?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  hideButtonVisible?: boolean;
  onHide?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;

  customActionTooltipTranslationId?: string;
  customActionTooltipTranslationValues?: Record<string, PrimitiveType>;
  customActionIconName?: string;
  onCustomAction?: (notification: INotification, ref: React.Component<INotificationCardProps>) => void;
  onCustomActionDispatch?: PayloadAction<string, any>[]
}

export interface INotification extends INotificationContent {
  id: number;
  onScreen?: boolean;
  count: number;
  timestamp: Date;
  autoHideDelay: number;
}
