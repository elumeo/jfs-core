import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
const Username = ({ value, onChange, error }) => {
    const { formatMessage } = useIntl();
    return (React.createElement(TextField, { id: 'username', type: 'text', required: true, error: error, placeholder: formatMessage({ id: 'login.username' }), helperText: error && !value
            ? formatMessage({ id: 'login.username.errorText' })
            : null, value: value, onChange: event => onChange(event.target.value) }));
};
export default Username;
//# sourceMappingURL=Username.js.map