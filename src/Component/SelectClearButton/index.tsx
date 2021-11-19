import React, { memo, ReactElement, useCallback, useEffect, useState } from 'react';
import { IconButton, IconProps, InputAdornment, Select, SelectProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { InputProps as StandardInputProps } from '@material-ui/core/Input/Input';
import { IconButtonProps } from '@material-ui/core/IconButton';

export type SelectClearButtonProps = Partial<SelectProps> & {
  onChange: SelectProps['onChange'];
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectClearButton = ({ children, onChange, clearButtonSize = 'small', clearIconSize = 'small', variant = 'standard', endAdornment, ...rest }: SelectClearButtonProps) => {
  const getIconSize = useCallback((): IconProps['fontSize'] => clearIconSize ? clearIconSize : clearButtonSize === 'medium' ? 'medium' : 'small', []);
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (onChange !== undefined) {
      if (rest.value !== undefined) {
        if (rest.value !== '' && showClearButton === false) {
          setShowClearButton(true);
        } else if (rest.value === '' && showClearButton === true) {
          setShowClearButton(false);
        }

        if (inputValue !== rest.value) {
          setInputValue(rest.value as string);
        }
      }
    }
  }, [rest.value]);

  const handleOnChange: SelectProps['onChange'] = useCallback((event, changeValue: string) => {
    if (onChange === undefined) {
      if (changeValue !== null && changeValue !== '') {
        if(showClearButton === false) {
          setShowClearButton(true);
        }
      } else if(showClearButton === true) {
        setShowClearButton(false);
      }

      if (rest.value === undefined) {
        setInputValue(changeValue === null ? '' : changeValue);
      }
    } else {
      onChange(event, changeValue);
    }
  }, []);

  const handleClearClick: IconButtonProps['onClick'] = useCallback(() => handleOnChange(null, null), []);

  const endAdornmentClearButton = showClearButton && (
    <IconButton
      disabled={rest.disabled}
      size={clearButtonSize}
      color={'secondary'}
      onClick={handleClearClick}
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