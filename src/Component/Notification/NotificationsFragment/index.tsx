import React from 'react';
import NoNotifications from './NoNotifications';
import NotificationCard from 'Component/Notification/NotificationCard';
import { useSelector } from 'Types/Redux';
import { INotification } from 'Types/Notification';
import Global from 'Store/Reducer/Global';
import * as MUI from '@material-ui/core'

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
              <MUI.ListItem key={notification.id}>

              <NotificationCard
              key={`card-${notification.id}`}
                config={{ ...notification, hideButtonVisible: true }}
                />
                </MUI.ListItem>
            )
          )}
        </>
      )
      : <NoNotifications key='no-notifications'/>
  );
}

export default NotificationsFragment;
