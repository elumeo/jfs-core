import React from 'react';
import { useIntl } from 'react-intl';
import MUIDialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import * as Button from './Button';
import useLogout from './useLogout';
import Text from './Text';
import DialogTitle from '@material-ui/core/DialogTitle';
const Dialog = ({ children }) => {
    const logout = useLogout();
    const { formatMessage } = useIntl();
    return (React.createElement(MUIDialog, { open: logout.open, title: formatMessage({ id: 'app.logout.title' }), onClose: logout.close, "aria-labelledby": 'logout-description' },
        React.createElement(DialogTitle, null, "Logout"),
        React.createElement(DialogContent, { style: {
                minHeight: 80,
            } },
            React.createElement(Text, { override: children })),
        React.createElement(DialogActions, null,
            React.createElement(Button.Submit, { pending: logout.pending, onClick: () => logout.commit({}) }),
            React.createElement(Button.Cancel, { onClick: logout.close }))));
};
export default Dialog;
