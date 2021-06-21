import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import useActions from 'Store/useActions';
import useVisibleToast from './useVisibleToast';

const Snackbar = () => {
  const { dismissToastAction } = useActions();
  const { open, severity, message, autoHideDuration } = useVisibleToast();
  return (
    <MUISnackbar
      open={open}
      id='alert-snackbar'
      onClose={(_, reason) => {
        if (reason === 'timeout') {
          dismissToastAction();
        }
      }}
      autoHideDuration={autoHideDuration}>
      <Alert severity={severity}>
        {message}
      </Alert>
    </MUISnackbar>
  );
}

export default Snackbar;