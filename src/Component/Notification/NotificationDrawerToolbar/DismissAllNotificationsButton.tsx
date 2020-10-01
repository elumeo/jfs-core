import React from 'react';
import { Button } from 'react-md';
import { INotification } from 'Types/Notification';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

const DismissAllNotificationsButton: React.FC = () => {
  const notifications = useSelector<INotification[]>(
    state => state.Core.Notification.notifications
  );
  const { dismissAllNotificationsAction } = useActions();
  return (
    <Button
      icon
      onClick={() => dismissAllNotificationsAction()}
      disabled={!notifications.length}>
      delete
    </Button>
  );
}

export default DismissAllNotificationsButton;
