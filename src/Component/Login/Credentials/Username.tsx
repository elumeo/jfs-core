import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import useError from './useError';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
};

const Username = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = useError(value);
    return (
      <TextField
        id='username'
        type='text'
        inputRef={ref}
        required
        error={error}
        placeholder={formatMessage({ id: 'login.username' })}
        helperText={
          error && !value
            ? formatMessage({ id: 'login.username.errorText' })
            : null
        }
        value={value}
        onChange={event => onChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && onEnter()}
      />
    );
  },
);

export default Username;
