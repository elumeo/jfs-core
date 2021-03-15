import React from 'react';
import { IconButton, Icon } from '@material-ui/core';
import useActions from 'Action/useActions';
import { useSelector } from 'Types/Redux';

const DismissAllNotificationsButton: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history);
  return (
    <IconButton
      disabled={!history.length}>
     <Icon>delete</Icon>
    </IconButton>
  );
}

export default DismissAllNotificationsButton;
