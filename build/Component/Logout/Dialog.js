import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import useLogout from './useLogout';
const Dialog = ({ children }) => {
    const logout = useLogout();
    const { formatMessage } = useIntl();
    return (React.createElement(MUI.Dialog, { id: "logout", open: logout.open, title: formatMessage({ id: 'app.logout.title' }), onClose: logout.close, "aria-labelledby": "logout-description" },
        React.createElement(MUI.DialogContent, null,
            React.createElement(MUI.Typography, { id: "logout-description" }, children
                ? children
                : formatMessage({ id: 'app.logout.message' }))),
        React.createElement(MUI.DialogActions, null,
            React.createElement(MUI.Button, { disabled: logout.pending, onClick: () => logout.commit({}) }, logout.pending
                ? React.createElement(MUI.CircularProgress, { id: "logout-progress" })
                : formatMessage({ id: 'app.logout.action' })),
            React.createElement(MUI.Button, { onClick: logout.close }, formatMessage({ id: 'app.cancel.action' })))));
};
export default Dialog;
//# sourceMappingURL=Dialog.js.map