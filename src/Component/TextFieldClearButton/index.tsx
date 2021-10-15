import React, { memo } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { IconButtonProps } from '@material-ui/core/IconButton';

type TextFieldClearButtonProps = Partial<TextFieldProps> & {
  onChange: TextFieldProps['onChange'];
  iconButtonSize?: IconButtonProps['size'];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextFieldClearButton = ({onChange, iconButtonSize = 'medium', variant = 'standard', ...rest}: TextFieldClearButtonProps) => {
  const getIconSize = () => iconButtonSize === 'medium' ? 24 : 18;
  const getIconButtonPadding = () => iconButtonSize === 'medium' ? 12 : 6;

  const endAdornment = (
    <InputAdornment position={'end'}>
      <IconButton size={iconButtonSize} disabled={rest.disabled} color={'secondary'} onClick={() => onChange(null)} style={{padding: getIconButtonPadding()}}>
        <BackspaceIcon style={{fontSize: getIconSize()}}/>
      </IconButton>
    </InputAdornment>
  );
  const preparedInputProps: Partial<StandardInputProps> = {...rest.InputProps, endAdornment: endAdornment};

  return (
    <TextField
      onChange={onChange}
      InputProps={preparedInputProps}
      autoComplete={'new-password'}
      {...rest}
    />
  );
};

export default memo(TextFieldClearButton);
