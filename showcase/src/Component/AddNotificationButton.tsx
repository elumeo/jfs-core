import * as React from 'react';
import * as MUI from '@material-ui/core';
import { useIntl } from 'react-intl';
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import uuid from 'uuid';

const random_select = <T, >(array: T[]) => array[Math.floor(Math.random() * array.length)]

const AddNotificationButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const { addNotification } = useActions();
  return (
    <MUI.Button onClick={() => addNotification({
      id: uuid(),
      variant: random_select(['default', 'error', 'success', 'warning', 'info']),
      title: 'Some title',
      subtitle: 'Some subtitle',
      content: <>Some content</>,
      action: (snackbar, id, temporary) => (
        <>
          
        </>
      )
    })}>
      {formatMessage({ id: 'Add Notification' })}
    </MUI.Button>
  );
}

export default AddNotificationButton;
