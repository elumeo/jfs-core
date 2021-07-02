import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
const Username = React.forwardRef(({ value, onChange, error, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    return (React.createElement(TextField, { id: 'username', type: 'text', inputRef: ref, required: true, error: error, placeholder: formatMessage({ id: 'login.username' }), helperText: error && !value
            ? formatMessage({ id: 'login.username.errorText' })
            : null, value: value, onChange: event => onChange(event.target.value), onKeyPress: event => event.key === 'Enter' && onEnter() }));
});
export default Username;
