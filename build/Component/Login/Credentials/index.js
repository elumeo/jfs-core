import React from 'react';
import Username from './Username';
import Password from './Password';
import useAutoFocus from './useAutoFocus';
import Form from './Form';
const Credentials = ({ value, onChange, onSubmit }) => {
    const username = React.useRef();
    const password = React.useRef();
    useAutoFocus(username);
    return (React.createElement(Form, null,
        React.createElement(Username, { ref: username, value: value.username, onChange: next => onChange(Object.assign(Object.assign({}, value), { username: next })), onEnter: () => password.current.focus() }),
        React.createElement(Password, { ref: password, value: value.password, onChange: next => onChange(Object.assign(Object.assign({}, value), { password: next })), onEnter: onSubmit })));
};
export default Credentials;
