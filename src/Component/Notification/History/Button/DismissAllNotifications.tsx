import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';

const DismissAllNotificationsButton: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history);
  const {removeAllNotifications} = useActions()
  return (
    <IconButton
      onClick={removeAllNotifications}
      disabled={!history.length}>
     <Icon>delete</Icon>
    </IconButton>
  );
}

export default DismissAllNotificationsButton;
