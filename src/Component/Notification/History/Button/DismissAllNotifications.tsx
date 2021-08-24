import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';

const DismissAllNotificationsButton: React.FC = () => {
  const history = useSelector(state => state.Core.Notification.history);
  const { removeAllNotifications } = useActions();
  return (
    <IconButton onClick={removeAllNotifications} disabled={!history.length}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DismissAllNotificationsButton;
