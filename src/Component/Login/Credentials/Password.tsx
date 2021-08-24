import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';
import useError from './useError';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
};

const Password = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = useError(value);
    return (
      <TextField
        id='password'
        type='password'
        inputRef={ref}
        required
        placeholder={formatMessage({ id: 'login.password' })}
        error={error}
        helperText={
          error && !value
            ? formatMessage({ id: 'login.password.errorText' })
            : null
        }
        value={value}
        onChange={event => onChange(event.target.value)}
        onKeyPress={e => e.key === 'Enter' && onEnter()}
      />
    );
  },
);

export default Password;
