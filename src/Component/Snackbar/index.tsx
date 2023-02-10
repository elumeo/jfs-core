import React from 'react';
import MUISnackbar, { SnackbarOrigin, SnackbarProps } from '@mui/material/Snackbar/Snackbar';
import useVisibleToast from './useVisibleToast';
import { Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { dismissToastAction } from 'Store/Action';

const anchor : SnackbarOrigin= {
  vertical: 'bottom',
  horizontal: 'center',
}
const Snackbar: React.FC = () => {
  const dispatch = useDispatch();
  const id = React.useId()
  const { open, severity, message, autoHideDuration } = useVisibleToast();
  const onCloseCallback: SnackbarProps['onClose'] = React.useCallback(
    (event, reason) => {
      if (reason === 'timeout') {
        dispatch(dismissToastAction());
      }
    }
    , [dispatch]
  );

  return (
    <MUISnackbar open={open} id={`alert-snackbar-${id}`} onClose={onCloseCallback} anchorOrigin={anchor} autoHideDuration={autoHideDuration}>
      {open ? <Alert severity={severity} variant='filled'>{message}</Alert> : null}
    </MUISnackbar>
  );
};

export default Snackbar;
