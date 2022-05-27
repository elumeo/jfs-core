import React, {memo, ReactElement, useCallback, useEffect, useState} from 'react';
import {
  FormControl,
  FormControlProps,
  IconButton,
  IconProps,
  InputAdornment, InputLabel,
  Select,
  SelectProps
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {IconButtonProps} from '@material-ui/core/IconButton';

export type SelectClearButtonProps = Partial<SelectProps> & {
  onChange: SelectProps['onChange'];
  clearButtonSize?: IconButtonProps['size'];
  clearIconSize?: IconProps['fontSize'];
  formControlProps?: Partial<FormControlProps>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectClearButton = ({
                             children,
                             onChange,
                             clearButtonSize = 'small',
                             clearIconSize = 'small',
                             variant = 'standard',
                             endAdornment,
                             formControlProps,
                             ...rest
                           }: SelectClearButtonProps) => {
  const getIconSize = useCallback((): IconProps['fontSize'] => clearIconSize ? clearIconSize : clearButtonSize === 'medium' ? 'medium' : 'small', []);
  const [showClearButton, setShowClearButton] = useState(false);
  const [inputValue, setInputValue] = useState<string | string[]>(null);
  const handleShowClearButtonState = () => {
    if ((((rest.multiple === undefined || rest.multiple === false) && rest.value !== '') || (rest.multiple && (rest.value as string[]).length > 0)) && showClearButton === false) {
      setShowClearButton(true);
    } else if (((rest.multiple === undefined || rest.multiple === false) && rest.value === '') || (rest.multiple && (rest.value as string[]).length <= 0) && showClearButton === true) {
      setShowClearButton(false);
    }
  }

  useEffect(() => {
    if (rest.value !== undefined) {
      handleShowClearButtonState();

      if (inputValue !== rest.value) {
        setInputValue(rest.value as string);
      }
    }
  }, [rest.value]);

  const handleOnChange: SelectProps['onChange'] = useCallback((event, changeValue: string) => {
    if (onChange === undefined) {
      handleShowClearButtonState()

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
      style={{marginRight: '21px'}}
    >
      <CloseIcon fontSize={getIconSize()}/>
    </IconButton>
  );
  const preparedEndAdornment = <InputAdornment position={'end'}>
    {endAdornment && (endAdornment as ReactElement).props.children}
    {endAdornmentClearButton}
  </InputAdornment>;

  return <FormControl fullWidth {...formControlProps}>
    {rest.label && <InputLabel>{rest.label}</InputLabel>}
    <Select
      {...rest}
      onChange={handleOnChange}
      endAdornment={preparedEndAdornment}
      autoComplete={'new-password'}
      value={inputValue === null ? rest.multiple ? [] : '' : inputValue}
    >
      {children}
    </Select>
  </FormControl>;
};

export default memo(SelectClearButton);
