import * as React from 'react';
import { useSelector } from 'react-redux';
import NotificationCard from './NotificationCard';
import './OnScreenNotifications.scss';
const OnScreenNotifications = () => {
    const { notifications, dismissAnimationClassName } = useSelector(state => ({
        notifications: state.Core.Notification.notifications,
        dismissAnimationClassName: state.Core.Notification.dismissAnimationClassName
    }));
    return (React.createElement("section", { className: 'notifications__on-screen' }, notifications
        .filter(notification => notification.onScreen)
        .map(notification => (React.createElement(NotificationCard, { config: notification, key: notification.id })))));
};
export default OnScreenNotifications;
//# sourceMappingURL=OnScreenNotifications.js.map