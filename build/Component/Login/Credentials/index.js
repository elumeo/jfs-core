import React from 'react';
import Username from './Username';
import Password from './Password';
const LoginCredentials = ({ value, onChange, onSubmit, error }) => {
    const username = React.useRef();
    const password = React.useRef();
    React.useEffect(() => {
        if (username.current) {
            username.current.focus();
        }
    }, [username.current]);
    return (React.createElement("form", { autoCorrect: 'false', autoComplete: 'off', style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 130,
            width: 300,
            boxSizing: 'border-box',
            paddingLeft: 24,
            paddingRight: 24,
            marginTop: 6,
            marginBottom: 32
        } },
        React.createElement(Username, { ref: username, value: value.username, onChange: next => onChange(Object.assign(Object.assign({}, value), { username: next })), error: error, onEnter: () => password.current.focus() }),
        React.createElement(Password, { ref: password, value: value.password, onChange: next => onChange(Object.assign(Object.assign({}, value), { password: next })), error: error, onEnter: onSubmit })));
};
export default LoginCredentials;
