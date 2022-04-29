import * as React from 'react';
import useActions from '@elumeo/jfs-core/build/Store/useActions';
import { useIntl } from 'react-intl';
import { Button } from '@mui/material';

const AddToastButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const { addToastAction } = useActions();
  return (
    <Button variant={'outlined'} onClick={() => addToastAction({contentMessage: 'Hi, I\'ve been slide up here.'})}>
      {formatMessage({ id: 'Add Toast' })}
    </Button>
  );
}

export default AddToastButton;
