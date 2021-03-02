import React from 'react';
import NoNotifications from './NoNotifications';
import NotificationCard from 'Component/Notification/NotificationCard';
import { useSelector } from 'Types/Redux';
import { INotification } from 'Types/Notification';
import Global from 'Store/Reducer/Global';

const NotificationsFragment: React.FC = () => {
  const notifications = useSelector<INotification[]>(
    state => state.Core.Notification.notifications
  );

  return (
    notifications.length
      ? (
        <>
          {notifications.map(
            notification => (
              <NotificationCard
                config={{ ...notification, hideButtonVisible: false }}
                key={notification.id}/>
            )
          )}
        </>
      )
      : <NoNotifications key='no-notifications'/>
  );
}

export default NotificationsFragment;
