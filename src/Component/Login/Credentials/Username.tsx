import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  error: boolean;
  onEnter: () => void;
};

const Username = React.forwardRef<HTMLInputElement, Props>(({ value, onChange, error, onEnter }, ref) => {
  const { formatMessage } = useIntl();
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
      onKeyPress={event => event.key === 'Enter' && onEnter()}/>
  );
});

export default Username;
