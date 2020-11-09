import React from 'react';
import NoNotifications from './NoNotifications';
import NotificationCard from 'Component/Notification/NotificationCard';
import { useSelector } from 'Types/Redux';
const NotificationsFragment = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    return (notifications.length
        ? (React.createElement(React.Fragment, null, notifications.map(notification => (React.createElement(NotificationCard, { config: Object.assign(Object.assign({}, notification), { hideButtonVisible: false }), key: notification.id })))))
        : React.createElement(NoNotifications, { key: 'no-notifications' }));
};
export default NotificationsFragment;
//# sourceMappingURL=index.js.map