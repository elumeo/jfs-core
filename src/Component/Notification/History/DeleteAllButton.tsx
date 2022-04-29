import React from 'react';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { removeAllNotifications } from 'Store/Action';

const DeleteAllButton: React.FC = () => {
  const { formatMessage } = useIntl()
  const history = useSelector(state => state.Core.Notification.history);
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(removeAllNotifications())} disabled={!history.length} startIcon={<Delete />}>
      {formatMessage({ id: 'notification.removeAll' })}
    </Button>
  );
};

export default DeleteAllButton;
