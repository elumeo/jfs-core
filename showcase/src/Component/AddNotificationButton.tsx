import * as React from 'react';
import { useIntl } from 'react-intl';
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import { v4 as uuid } from 'uuid';
import { Button } from '@material-ui/core';

const randomSelect = <T, >(array: T[]) => array[Math.floor(Math.random() * array.length)]

const AddNotificationButton: React.FC = () => {
  const {formatMessage} = useIntl();
  const {addNotification} = useActions();
  return (
    <Button variant={'outlined'} onClick={() => addNotification({
      id: uuid(),
      variant: randomSelect(['default', 'error', 'success', 'warning', 'info']),
      title: 'Some title',
      subtitle: 'Some subtitle',
      content: <>Some content</>,
      action: () => (<></>)
    })}>
      {formatMessage({id: 'Add Notification'})}
    </Button>
  );
}

export default AddNotificationButton;
