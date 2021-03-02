import React from 'react';
// import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
// import International from '../International';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import Button from '@material-ui/core/Button';
import { useIntl } from 'react-intl';
const LoginButton = () => {
    const { checkLogin } = useActions();
    const { formatMessage } = useIntl();
    const { isCheckingLogin, username, password } = useSelector(state => ({
        username: state.Core.Login.username,
        password: state.Core.Login.password,
        isCheckingLogin: state.Core.Login.isCheckingLogin
    }));
    return (React.createElement(Button, { variant: 'contained', color: 'secondary', onClick: () => checkLogin({ username, password }), disabled: isCheckingLogin }, isCheckingLogin
        ? React.createElement(CircularProgress, { id: 'check-login-progress' })
        : formatMessage({ id: 'login.button' })));
};
export default LoginButton;
//# sourceMappingURL=LoginButton.js.map