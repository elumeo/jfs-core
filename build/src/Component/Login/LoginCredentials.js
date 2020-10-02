import React from 'react';
import TextField from 'react-md/lib/TextFields/TextField';
import International from '../../../Component/International';
import useActions from '../../../Store/Action/useActions';
import { useSelector } from '../../../Types/Redux';
const LoginCredentials = () => {
    const { username, password } = useSelector(state => ({
        username: state.Core.Login.username,
        password: state.Core.Login.password
    }));
    const { updateCredentials, checkLogin } = useActions();
    return (React.createElement(International, null, ({ formatMessage }) => (React.createElement("div", { className: "login-credentials" },
        React.createElement(TextField, { id: "username", type: "text", required: true, placeholder: formatMessage({ id: 'login.username' }), errorText: formatMessage({ id: 'login.username.errorText' }), onChange: update => updateCredentials({
                username: update,
                password
            }) }),
        React.createElement(TextField, { id: "password", type: "password", required: true, placeholder: formatMessage({ id: 'login.password' }), errorText: formatMessage({ id: 'login.password.errorText' }), onChange: update => updateCredentials({
                username,
                password: update
            }), onKeyUp: e => (e.keyCode === 13 && checkLogin({ username, password })) })))));
};
export default LoginCredentials;
//# sourceMappingURL=LoginCredentials.js.map