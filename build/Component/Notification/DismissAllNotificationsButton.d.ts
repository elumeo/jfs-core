import React from 'react';
import { dismissAllNotificationsAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Types/Notification';
export interface IDismissAllNotificationsButtonProps {
    notifications?: INotification[];
    dismissAllNotificationsAction?: typeof dismissAllNotificationsAction;
}
declare const _default: import("react-redux").ConnectedComponent<React.FC<IDismissAllNotificationsButtonProps>, Pick<IDismissAllNotificationsButtonProps, never> & IDismissAllNotificationsButtonProps>;
export default _default;
