import React from 'react';
import NoNotifications from './NoNotifications';
import NotificationCard from '../../Notification/NotificationCard';
import { useSelector } from '../../../Types/Redux';
import * as MUI from '@material-ui/core';
const NotificationsFragment = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    return (notifications.length
        ? (React.createElement(React.Fragment, null, notifications.map(notification => (React.createElement(MUI.ListItem, { key: notification.id },
            React.createElement(NotificationCard, { key: `card-${notification.id}`, config: Object.assign(Object.assign({}, notification), { hideButtonVisible: true }) }))))))
        : React.createElement(NoNotifications, { key: 'no-notifications' }));
};
export default NotificationsFragment;
//# sourceMappingURL=index.js.map