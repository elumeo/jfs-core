import React from 'react';
import Button from 'react-md/lib/Buttons/Button';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import International from '../International';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
const LoginButton = () => {
    const { checkLogin } = useActions();
    const { isCheckingLogin, username, password } = useSelector(state => ({
        username: state.Core.Login.username,
        password: state.Core.Login.password,
        isCheckingLogin: state.Core.Login.isCheckingLogin
    }));
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement(Button, { primary: true, flat: true, onClick: () => checkLogin({ username, password }), disabled: isCheckingLogin }, isCheckingLogin
        ? React.createElement(CircularProgress, { id: 'check-login-progress' })
        : formatMessage({ id: 'login.button' })))));
};
export default LoginButton;
//# sourceMappingURL=LoginButton.js.map