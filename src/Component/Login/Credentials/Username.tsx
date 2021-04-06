import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@material-ui/core/TextField';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  error: boolean;
};

const Username: React.FC<Props> = ({ value, onChange, error }) => {
  const { formatMessage } = useIntl()
  return (
    <TextField
      id='username'
      type='text'
      required
      error={error}
      placeholder={formatMessage({ id: 'login.username' })}
      helperText={
        error && !value
          ? formatMessage({ id: 'login.username.errorText' })
          : null
      }
      value={value}
      onChange={event => onChange(event.target.value)}/>
  );
};

export default Username;
