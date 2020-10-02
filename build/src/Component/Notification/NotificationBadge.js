import React from 'react';
import { Badge, Button } from 'react-md';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from '../../../Types/Redux';
import './NotificationBadge.scss';
const NotificationBadge = () => {
    const notifications = useSelector(state => state.Core.Notification.notifications);
    const { toggleNotificationDrawerAction } = useActions();
    const empty = !notifications.length;
    return (React.createElement(Badge, { primary: true, circular: true, "aria-haspopup": true, badgeId: 'notification-badge', badgeContent: empty ? '' : notifications.length, className: empty ? 'md-badge-container--empty' : '' },
        React.createElement(Button, { icon: true, onClick: () => toggleNotificationDrawerAction(), "aria-describedby": 'notification-badge' }, "notifications")));
};
export default NotificationBadge;
//# sourceMappingURL=NotificationBadge.js.map