import React from 'react';
import { Badge, Button } from 'react-md';
import { INotification } from 'Types/Notification';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
import './NotificationBadge.scss';

const NotificationBadge: React.FC = () => {
  const notifications = useSelector<INotification[]>(
    state => state.Core.Notification.notifications
  );
  const { toggleNotificationDrawerAction } = useActions();
  const empty = !notifications.length;
  return (
    <Badge
      primary
      circular
      aria-haspopup
      badgeId='notification-badge'
      badgeContent={empty ? '' : notifications.length}
      className={empty ? 'md-badge-container--empty' : ''}>
      <Button
        icon
        onClick={() => toggleNotificationDrawerAction()}
        aria-describedby='notification-badge'>
        notifications
      </Button>
    </Badge>
  );
};

export default NotificationBadge;
