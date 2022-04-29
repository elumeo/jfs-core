import React from 'react';
import MUISnackbar, {SnackbarProps} from '@mui/material/Snackbar';
// import useActions from 'Store/useActions';
import useVisibleToast from './useVisibleToast';
import { Alert } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { dismissToastAction } from 'Store/Action';

const Snackbar: React.FC = () => {
  const dispatch = useDispatch();
  const { open, severity, message, autoHideDuration } = useVisibleToast();
  const onCloseCallback: SnackbarProps['onClose'] = React.useCallback((event, reason) => {
    if (reason === 'timeout') {
      dispatch(dismissToastAction());
    }
  }, [dispatch])
  // const alertEl = useMemo(() => {}, [])

  return (
    <MUISnackbar open={open} id='alert-snackbar' onClose={onCloseCallback} autoHideDuration={autoHideDuration}>
      <Alert severity={severity} variant='filled'>{message}</Alert>
    </MUISnackbar>
  );
};

export default Snackbar;
