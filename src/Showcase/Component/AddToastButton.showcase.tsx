import * as React from 'react';
import { useIntl } from 'react-intl';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToastAction } from '../../Store/Action';

const AddToastButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const dispatch = useDispatch();
  return (
    <Button variant={'outlined'} onClick={() => dispatch(addToastAction({contentMessage: 'Hi, I\'ve been slide up here.'}))}>
      {formatMessage({ id: 'Add Toast' })}
    </Button>
  );
}

export default AddToastButton;
