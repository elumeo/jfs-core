import * as React from 'react';
import * as MUI from '@material-ui/core';
import useActions from '@elumeo/jfs-core/build/Store/Action/useActions';
import { useIntl } from 'react-intl';

const AddToastButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const { addToastAction } = useActions();
  return (
    <MUI.Button
      onClick={() => addToastAction({
        contentMessage: 'Hi, I\'ve been slide up here.'
      })}>
      {formatMessage({ id: 'Add Toast' })}
    </MUI.Button>
  );
}

export default AddToastButton;
