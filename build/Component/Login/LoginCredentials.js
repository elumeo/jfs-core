import React from 'react';
import useActions from '../../Store/Action/useActions';
import { useSelector } from '../../Types/Redux';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import { getIsAuthorizedSelector, getIsCheckingSessionSelector } from '../../Store/Selectors/Core/Session';
const LoginCredentials = () => {
    const { username, password } = useSelector(state => ({
        username: state.Core.Login.username,
        password: state.Core.Login.password
    }));
    const { updateCredentials, checkLogin } = useActions();
    const IsAuthorized = useSelector(getIsAuthorizedSelector);
    const IsCheckingSession = useSelector(getIsCheckingSessionSelector);
    const { formatMessage } = useIntl();
    return (React.createElement("form", { className: 'login-credentials', autoCorrect: 'false', autoComplete: 'off' },
        React.createElement(DialogContent, null,
            React.createElement(TextField, { id: 'username', type: 'text', required: true, error: (IsAuthorized !== null || IsAuthorized !== true) && !IsCheckingSession && !username, placeholder: formatMessage({ id: 'login.username' }), helperText: (IsAuthorized !== null || IsAuthorized !== true) && IsCheckingSession && !username && formatMessage({ id: 'login.username.errorText' }), onChange: (update) => updateCredentials({
                    username: update.target.value,
                    password
                }) })),
        React.createElement(DialogContent, null,
            React.createElement(TextField, { id: 'password', type: 'password', required: true, placeholder: formatMessage({ id: 'login.password' }), error: (IsAuthorized !== null || IsAuthorized !== true) && !IsCheckingSession && !password, helperText: (IsAuthorized !== null || IsAuthorized !== true) && !IsCheckingSession && !password && formatMessage({ id: 'login.password.errorText' }), onChange: (update) => updateCredentials({
                    username,
                    password: update.target.value
                }), onKeyUp: e => (e.keyCode === 13 && checkLogin({ username, password })) }))));
};
export default LoginCredentials;
//# sourceMappingURL=LoginCredentials.js.map