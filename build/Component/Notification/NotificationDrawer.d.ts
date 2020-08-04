import * as React from 'react';
import { INotification } from '../../Types/Notification';
import './NotificationDrawer.scss';
import { hideNotificationDrawerAction, toggleNotificationDrawerAction } from '../../Store/Action/NotificationAction';
interface INotificationDrawerProps {
    notificationDrawerVisible?: boolean;
    notifications?: INotification[];
    notificationDrawerPinned?: boolean;
    toggleNotificationDrawerAction?: typeof toggleNotificationDrawerAction;
    hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
}
declare class NotificationDrawer extends React.Component<INotificationDrawerProps> {
    closeOnESC: (e: React.KeyboardEvent) => void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof NotificationDrawer, Pick<React.ClassAttributes<NotificationDrawer> & INotificationDrawerProps, "ref" | "key"> & INotificationDrawerProps>;
export default _default;
