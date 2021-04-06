import React from 'react';
import { useIntl } from 'react-intl';
import * as MUI from '@material-ui/core';
import { useSelector } from '../../Types/Redux';
const Submit = ({ onClick }) => {
    const { formatMessage } = useIntl();
    const isCheckingLogin = useSelector(state => state.Core.Login.isCheckingLogin);
    return (React.createElement(MUI.Button, { variant: 'contained', color: 'secondary', onClick: onClick, disabled: isCheckingLogin }, isCheckingLogin
        ? React.createElement(MUI.CircularProgress, { id: 'check-login-progress' })
        : formatMessage({ id: 'login.button' })));
};
export default Submit;
//# sourceMappingURL=Submit.js.map