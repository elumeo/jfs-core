import React from 'react';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from 'react-redux';
import './NotificationBadge.scss';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
const NotificationBadge = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    const { toggleNotificationDrawerAction } = useActions();
    return (React.createElement(IconButton, { color: 'inherit', onClick: toggleNotificationDrawerAction },
        React.createElement(Badge, { color: 'secondary', 
            // badgeId='notification-badge'
            badgeContent: notifications.length },
            React.createElement(NotificationsIcon, null))));
};
export default NotificationBadge;
//# sourceMappingURL=NotificationBadge.js.map