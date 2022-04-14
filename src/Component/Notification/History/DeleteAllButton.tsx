import React from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import useActions from 'Store/useActions';
import { useSelector } from 'Types/Redux';
import { useIntl } from 'react-intl';

const DeleteAllButton: React.FC = () => {
  const { formatMessage } = useIntl()
  const history = useSelector(state => state.Core.Notification.history);
  const { removeAllNotifications } = useActions();
  return (
    <Button onClick={() => removeAllNotifications()} disabled={!history.length} startIcon={<Delete/>}>
      {formatMessage({ id: 'notification.removeAll' })}
    </Button>
  );
};

export default DeleteAllButton;
