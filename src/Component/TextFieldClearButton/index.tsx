import React, { memo, ReactElement, useEffect, useState } from 'react';
import { IconButton, IconProps, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { IconButtonProps } from '@material-ui/core/IconButton';

type TextFieldClearButtonProps = Partial<TextFieldProps> & {
  onChange: TextFieldProps['onChange'];
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextFieldClearButton = ({ onChange, clearButtonSize = 'small', clearIconSize = 'small', variant = 'standard', InputProps, ...rest }: TextFieldClearButtonProps) => {
  const getIconSize = (): IconProps['fontSize'] => clearIconSize ? clearIconSize : clearButtonSize === 'medium' ? 'medium' : 'small';
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (rest.value !== undefined) {
      if (rest.value !== '') {
        setShowClearButton(true);
      } else {
        setShowClearButton(false);
      }

      setInputValue(rest.value as string);
    }
  }, [rest.value]);

  const handleOnChange: TextFieldProps['onChange'] = (event) => {
    if (event !== null && event.target.value !== '') {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }

    if (rest.value === undefined) {
      setInputValue(event === null ? '' : event.target.value);
    }
    onChange(event);
  };

  const endAdornmentClearButton = showClearButton && (
    <IconButton
      disabled={rest.disabled}
      size={clearButtonSize}
      color={'secondary'}
      onClick={() => handleOnChange(null)}
    >
      <CloseIcon fontSize={getIconSize()} />
    </IconButton>
  );
  const preparedInputProps: Partial<StandardInputProps> = {
    ...InputProps, endAdornment: <InputAdornment position={'end'}>
      {InputProps && InputProps.endAdornment && (InputProps.endAdornment as ReactElement).props.children}
      {endAdornmentClearButton}
    </InputAdornment>
  };

  return (
    <TextField
      {...rest}
      onChange={handleOnChange}
      InputProps={preparedInputProps}
      autoComplete={'new-password'}
      value={inputValue}
    />
  );
};

export default memo(TextFieldClearButton);
