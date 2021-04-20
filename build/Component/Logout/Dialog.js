import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import useLogout from './useLogout';
const Dialog = ({ children }) => {
    const logout = useLogout();
    const { formatMessage } = useIntl();
    return (React.createElement(MUIDialog, { open: logout.open, title: formatMessage({ id: 'app.logout.title' }), onClose: logout.close, "aria-labelledby": "logout-description" },
        React.createElement(DialogContent, null,
            React.createElement(Typography, { id: "logout-description" }, children
                ? children
                : formatMessage({ id: 'app.logout.message' }))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { disabled: logout.pending, onClick: () => logout.commit({}) }, logout.pending
                ? React.createElement(CircularProgress, { id: "logout-progress" })
                : formatMessage({ id: 'app.logout.action' })),
            React.createElement(Button, { onClick: logout.close }, formatMessage({ id: 'app.cancel.action' })))));
};
export default Dialog;
