import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import { INotification } from 'Types/Notification';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';
import Global from 'Store/Reducer/Global';

const DismissAllNotificationsButton: React.FC = () => {
  const notifications = useSelector<INotification[]>(
    state => state.Core.Notification.notifications
  );
  const { dismissAllNotificationsAction } = useActions();
  return (
    <IconButton
      onClick={() => dismissAllNotificationsAction()}
      disabled={!notifications.length}>
     <Icon>delete</Icon>
    </IconButton>
  );
}

export default DismissAllNotificationsButton;
