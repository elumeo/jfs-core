import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import useError from './useError';
const Username = React.forwardRef(({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = useError(value);
    return (React.createElement(TextField, { autoComplete: 'username', id: 'username', type: 'text', inputRef: ref, required: true, error: error, placeholder: formatMessage({ id: 'login.username' }), helperText: error && !value
            ? formatMessage({ id: 'login.username.errorText' })
            : null, value: value, onChange: event => onChange(event.target.value), onKeyPress: event => event.key === 'Enter' && onEnter() }));
});
export default Username;
