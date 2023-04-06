import React from 'react';
import { useIntl } from 'react-intl';
import TextField from '@mui/material/TextField';
import isEmptyString from './isEmptyString';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export type Props = {
  value: string;
  onChange: (next: string) => void;
  onEnter: () => void;
};

const Password = React.forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, onEnter }, ref) => {
    const { formatMessage } = useIntl();
    const error = isEmptyString(value);
    const [hidden, setHidden] = React.useState(true);
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
        type={hidden ? 'password' : 'text'}
        inputRef={ref}
        required
        label={formatMessage({ id: 'login.password' })}
        error={error}
        helperText={helperText}
        value={value ?? ''}
        InputProps={{ endAdornment: <IconButton onClick={() => setHidden(toggle => !toggle)}>{hidden ? <Visibility /> : <VisibilityOff />}</IconButton> }}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
    );
  },
);

export default Password;
