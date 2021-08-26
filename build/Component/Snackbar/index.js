import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import useActions from '../../Store/useActions';
import useVisibleToast from './useVisibleToast';
const Snackbar = () => {
    const { dismissToastAction } = useActions();
    const { open, severity, message, autoHideDuration } = useVisibleToast();
    return (React.createElement(MUISnackbar, { open: open, id: 'alert-snackbar', onClose: (_, reason) => {
            if (reason === 'timeout') {
                dismissToastAction();
            }
        }, autoHideDuration: autoHideDuration },
        React.createElement(Alert, { severity: severity, variant: 'filled' }, message)));
};
export default Snackbar;
