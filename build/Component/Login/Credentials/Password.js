import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
const Password = React.forwardRef(({ value, onChange, onEnter, error }, ref) => {
    const { formatMessage } = useIntl();
    return (React.createElement(TextField, { id: 'password', type: 'password', inputRef: ref, required: true, placeholder: formatMessage({ id: 'login.password' }), error: error, helperText: error && !value
            ? formatMessage({ id: 'login.password.errorText' })
            : null, value: value, onChange: event => onChange(event.target.value), onKeyPress: e => e.key === 'Enter' && onEnter() }));
});
export default Password;
