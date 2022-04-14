import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import useActions from 'Store/useActions';
import useVisibleToast from './useVisibleToast';
import { Alert } from '@material-ui/lab';

const Snackbar: React.FC = () => {
  const { dismissToastAction } = useActions();
  const { open, severity, message, autoHideDuration } = useVisibleToast();
  const onCloseCallback = React.useCallback((event, reason) => {
    if (reason === 'timeout') {
      dismissToastAction();
    }
  }, [dismissToastAction])
  // const alertEl = useMemo(() => {}, [])

  return (
    <MUISnackbar open={open} id='alert-snackbar' onClose={onCloseCallback} autoHideDuration={autoHideDuration}>
      <Alert severity={severity} variant='filled'>{message}</Alert>
    </MUISnackbar>
  );
};

export default Snackbar;
