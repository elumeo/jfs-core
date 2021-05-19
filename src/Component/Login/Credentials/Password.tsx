import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
  error: boolean;
};

const Password = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, onEnter, error }, ref) => {
  const { formatMessage } = useIntl();
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
          : null}
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyPress={e => e.key === 'Enter' && onEnter()}/>
  );
})

export default Password;
