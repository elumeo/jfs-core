import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
  error: boolean;
};

const Password: React.FC<Props> = ({ value, onChange, onEnter, error }) => {
  const { formatMessage } = useIntl();
  return (
    <TextField
      id='password'
      type='password'
      required
      placeholder={formatMessage({ id: 'login.password' })}
      error={error}
      helperText={
        error && !value
          ? formatMessage({ id: 'login.password.errorText' })
          : null}
      value={value}
      onChange={event => onChange(event.target.value)}
      onKeyPress={e => e.keyCode === 13 && onEnter()}/>
  );
}

export default Password;
