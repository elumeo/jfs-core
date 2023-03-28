import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@mui/material/TextField';
import isEmptyString from './isEmptyString';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
};

const Password = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = isEmptyString(value);
    const helperText = error && !value
      ? formatMessage({ id: 'login.password.errorText' })
      : null
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    }
    const handleEnter = (event: React.KeyboardEvent) => event.key === 'Enter' && onEnter()

    return (
      <TextField
        autoComplete={'current-password'}
        id='password'
        type='password'
        inputRef={ref}
        required
        label={formatMessage({ id: 'login.password' })}
        error={error}
        helperText={helperText}
        value={value ?? ''}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
    );
  },
);

export default Password;
