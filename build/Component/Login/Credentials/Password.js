import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
const Password = ({ value, onChange, onEnter, error }) => {
    const { formatMessage } = useIntl();
    return (React.createElement(TextField, { id: 'password', type: 'password', required: true, placeholder: formatMessage({ id: 'login.password' }), error: error, helperText: error && !value
            ? formatMessage({ id: 'login.password.errorText' })
            : null, value: value, onChange: event => onChange(event.target.value), onKeyPress: e => e.keyCode === 13 && onEnter() }));
};
export default Password;
