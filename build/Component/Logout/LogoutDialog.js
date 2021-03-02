import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import { useIntl } from 'react-intl';
import Typography from '@material-ui/core/Typography';
const LogoutDialog = ({ children }) => {
    const { logout, closeLogout } = useActions();
    const { formatMessage } = useIntl();
    const { logoutOpen, logoutPending } = useSelector(state => ({
        logoutOpen: state.Core.Logout.logoutOpen,
        logoutPending: state.Core.Logout.logoutPending
    }));
    return (React.createElement(Dialog, { id: "logout", open: logoutOpen, title: formatMessage({ id: 'app.logout.title' }), onClose: () => closeLogout(), "aria-labelledby": "logoutDescription" },
        React.createElement(DialogContent, null,
            React.createElement(Typography, { id: "logoutDescription", className: "md-color--secondary-text" }, children
                ? children
                : formatMessage({ id: 'app.logout.message' }))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { disabled: logoutPending, onClick: () => logout({}) }, logoutPending
                ? React.createElement(CircularProgress, { id: "logout-progress" })
                : formatMessage({ id: 'app.logout.action' })),
            ",",
            React.createElement(Button, { onClick: () => closeLogout() }, formatMessage({ id: 'app.cancel.action' })))));
};
export default LogoutDialog;
//# sourceMappingURL=LogoutDialog.js.map