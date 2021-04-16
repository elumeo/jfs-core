import React from 'react';
import * as MUI from '@material-ui/core';
import Credentials from './Credentials';
import Submit from './Submit';
import useLogin from './useLogin';
const Dialog = () => {
    const login = useLogin();
    return (React.createElement(MUI.Dialog, { id: 'login-dialog', open: login.open, "aria-describedby": '' },
        React.createElement(MUI.DialogTitle, null, "Login"),
        React.createElement(Credentials, { value: login.credentials, onChange: login.onChange, onSubmit: login.check, error: login.error }),
        React.createElement(MUI.DialogActions, null,
            React.createElement(Submit, { onClick: login.check }))));
};
export default Dialog;
