import React, { memo, ReactElement, useEffect, useState } from 'react';
import { IconButton, IconProps, InputAdornment, Select, SelectProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { IconButtonProps } from '@material-ui/core/IconButton';

type SelectClearButtonProps = Partial<SelectProps> & {
  onChange: SelectProps['onChange'];
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectClearButton = ({ children, onChange, clearButtonSize = 'small', clearIconSize = 'small', variant = 'standard', endAdornment, ...rest }: SelectClearButtonProps) => {
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

  const handleOnChange: SelectProps['onChange'] = (event, changeValue: string) => {
    if (changeValue !== null && changeValue !== '') {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }

    if (rest.value === undefined) {
      setInputValue(changeValue === null ? '' : changeValue);
    }
    onChange(event, changeValue);
  };

  const endAdornmentClearButton = showClearButton && (
    <IconButton
      size={clearButtonSize}
      color={'secondary'}
      onClick={() => handleOnChange(null, null)}
      style={{ marginRight: '21px' }}
    >
      <CloseIcon fontSize={getIconSize()} />
    </IconButton>
  );
  const preparedEndAdornment: Partial<StandardInputProps> = <InputAdornment position={'end'}>
    {endAdornment && (endAdornment as ReactElement).props.children}
    {endAdornmentClearButton}
  </InputAdornment>;

  return (
    <Select
      {...rest}
      onChange={handleOnChange}
      endAdornment={preparedEndAdornment}
      autoComplete={'new-password'}
      value={inputValue}
    >
      {children}
    </Select>
  );
};

export default memo(SelectClearButton);
