import React from 'react';
import './NotificationBadge.scss';
import { toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Types/Notification';
export interface INotificationBadgeProps {
    notifications?: INotification[];
    toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<INotificationBadgeProps>, Pick<INotificationBadgeProps, never> & INotificationBadgeProps>;
export default _default;
