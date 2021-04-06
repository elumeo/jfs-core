import React from 'react';
import Username from './Username';
import Password from './Password';
const LoginCredentials = ({ value, onChange, onSubmit, error }) => (React.createElement("form", { autoCorrect: 'false', autoComplete: 'off' },
    React.createElement(Username, { value: value.username, onChange: next => onChange(Object.assign(Object.assign({}, value), { username: next })), error: error }),
    React.createElement(Password, { value: value.password, onChange: next => onChange(Object.assign(Object.assign({}, value), { password: next })), error: error, onEnter: onSubmit })));
export default LoginCredentials;
//# sourceMappingURL=index.js.map