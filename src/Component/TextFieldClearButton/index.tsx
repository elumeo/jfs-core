import React, { memo, ReactElement, useCallback, useEffect, useState } from 'react';
import { IconButton, IconProps, InputAdornment, TextField, TextFieldProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { IconButtonProps } from '@material-ui/core/IconButton';

export type TextFieldClearButtonProps = Partial<TextFieldProps> & {
  onChange?: TextFieldProps['onChange'];
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
  onClearClick?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextFieldClearButton = React.forwardRef<HTMLDivElement, TextFieldClearButtonProps>(({
                                                                                            onChange,
                                                                                            clearButtonSize = 'small',
                                                                                            clearIconSize = 'small',
                                                                                            onClearClick,
                                                                                            variant = 'standard',
                                                                                            InputProps,
                                                                                            ...rest
                                                                                          }, ref) => {
  const getIconSize = useCallback((): IconProps['fontSize'] => clearIconSize ? clearIconSize : clearButtonSize === 'medium' ? 'medium' : 'small', []);
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (onChange !== undefined) {
      if (rest.value !== '' && showClearButton === false) {
        setShowClearButton(true);
      } else if (rest.value === '' && showClearButton === true) {
        setShowClearButton(false);
      }

      if (inputValue !== rest.value) {
        setInputValue(rest.value as string);
      }
    }
  }, [rest.value]);

  const handleClearClick: IconButtonProps['onClick'] = useCallback(() => {
    if(onClearClick !== undefined) {
      onClearClick();
    } else {
      handleOnChange(null)
    }
  }, [onChange, onClearClick]);

  const handleOnChange: TextFieldProps['onChange'] = useCallback((event) => {
    if (onChange === undefined) {
      if (event !== null && event.target.value !== '' && showClearButton === false) {
        setShowClearButton(true);
      } else if (showClearButton === true) {
        setShowClearButton(false);
      }
      setInputValue(event === null ? '' : event.target.value);
    } else {
      onChange(event);
    }
  }, [onChange]);

  const endAdornmentClearButton = showClearButton && (
    <IconButton
      disabled={rest.disabled}
      size={clearButtonSize}
      color={'secondary'}
      onClick={handleClearClick}
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
      ref={ref}
      {...rest}
      onChange={handleOnChange}
      InputProps={preparedInputProps}
      autoComplete={'new-password'}
      value={rest.value !== undefined ? rest.value : inputValue}
    />
  );
});

export default memo(TextFieldClearButton);
