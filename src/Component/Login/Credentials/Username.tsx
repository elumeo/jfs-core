import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@mui/material/TextField';
import isEmptyString from './isEmptyString';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
};

const Username = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = isEmptyString(value);
    return (
      <TextField
        autoComplete={'username'}
        id='username'
        type='text'
        inputRef={ref}
        required
        error={error}
        label={formatMessage({ id: 'login.username' })}
        helperText={
          error
          && formatMessage({ id: 'login.username.errorText' })

        }
        value={value ?? ''}
        onChange={event => onChange(event.target.value)}
        onKeyPress={event => event.key === 'Enter' && onEnter()}
      />
    );
  },
);

export default Username;
