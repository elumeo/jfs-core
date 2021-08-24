import React from 'react';
import MUIDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';
const Dialog = () => {
    const login = useLogin();
    return (React.createElement(MUIDialog, { open: login.open, style: {
            marginBottom: '32vh',
        } },
        React.createElement(DialogTitle, null, "Login"),
        React.createElement(DialogContent, null,
            React.createElement(Credentials, { value: login.credentials, onChange: login.onChange, onSubmit: login.check })),
        React.createElement(DialogActions, null,
            React.createElement(Submit, { onClick: login.check }))));
};
export default Dialog;
