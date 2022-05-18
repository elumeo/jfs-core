import React, { memo, ReactElement, useCallback, useEffect, useState } from 'react';
import { IconButton, IconProps, InputAdornment, Select, SelectProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
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
  const [inputValue, setInputValue] = useState<string | string[]>(null);

  useEffect(() => {
    if (onChange !== undefined) {
      if (rest.value !== undefined) {
        if ((rest.multiple === false && rest.value !== '' || (rest.value as string[]).length > 0) && showClearButton === false) {
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
      if (rest.multiple === false && rest.value !== '' || (rest.value as string[]).length > 0) {
        if(showClearButton === false) {
          setShowClearButton(true);
        }
      } else if(showClearButton === true) {
        setShowClearButton(false);
      }

      if (rest.value === undefined) {
        setInputValue(changeValue === null ? rest.multiple ? [] as string[] : '' : changeValue);
      }
    } else {
      onChange(event, changeValue);
    }
  }, [onChange]);

  const handleClearClick: IconButtonProps['onClick'] = useCallback(() => handleOnChange(null, null), [onChange]);

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
  const preparedEndAdornment = <InputAdornment position={'end'}>
    {endAdornment && (endAdornment as ReactElement).props.children}
    {endAdornmentClearButton}
  </InputAdornment>;

  return (
    <Select
      {...rest}
      onChange={handleOnChange}
      endAdornment={preparedEndAdornment}
      autoComplete={'new-password'}
      value={inputValue === null ? rest.multiple ? [] : '' : inputValue}
    >
      {children}
    </Select>
  );
};

export default memo(SelectClearButton);
