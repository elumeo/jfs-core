import React from 'react';
// import { Badge, Button } from '@material-ui/core';
import { INotification } from 'Types/Notification';
import useActions from 'Action/useActions';
import { useSelector } from 'react-redux';
import './NotificationBadge.scss';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Global from 'Store/Reducer/Global';
const NotificationBadge: React.FC = () => {
  const notifications = useSelector<Global.State, INotification[]>(
    state => state.Core.Notification.notifications
  );
  const { toggleNotificationDrawerAction } = useActions();
  return (
    <IconButton
      color={'inherit'}
      onClick={toggleNotificationDrawerAction}>
      <Badge
        color={'secondary'}
        // badgeId='notification-badge'
        badgeContent={notifications.length}
      >
        <NotificationsIcon />
      </Badge>
    </IconButton>
  );
};

export default NotificationBadge;
