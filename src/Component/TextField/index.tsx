import React, { useMemo } from 'react';
import { IconButton, IconProps, InputAdornment, TextField as MuiTextField, TextFieldProps } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import { IconButtonProps } from '@mui/material/IconButton';

export type Props = TextFieldProps & {
  clearButtonSize?: IconButtonProps['size'];
  clearButtonProps?: IconButtonProps;
  clearIconSize?: IconButtonProps['size'] & IconProps['fontSize']
  hideClearButton?: boolean;
  forceEnableClearButton?: boolean;
  selectOnFocus?: boolean;
};
const TextField = React.forwardRef<HTMLDivElement, Props>(({
  clearButtonSize = 'small',
  clearIconSize = 'small',
  value = null,
  hideClearButton,
  forceEnableClearButton,
  clearButtonProps,
  name,
  selectOnFocus,
  onFocus,
  ...props
}, ref) => {
  const isDirty = value !== null && value !== undefined && value !== '';
  const clear = React.useCallback(
    () => {
      props?.onChange?.({ target: { value: null } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    },
    [props.onChange]
  )
  const _onFocus: TextFieldProps['onFocus'] = React.useCallback((e) => {
    if (onFocus) {
      onFocus(e)
    }
    if (selectOnFocus) {
      e.target.select()
    }
  }, [selectOnFocus, onFocus])
  const endAdornmentClearButton = React.useMemo(
    () => (forceEnableClearButton || isDirty) && !hideClearButton ? (
      <IconButton
        disabled={props.disabled && !forceEnableClearButton}
        size={clearButtonSize}
        color={'secondary'}
        onClick={clear}
        {...clearButtonProps}
      ><Clear fontSize={clearIconSize} /></IconButton>)
      : <></>,
    [isDirty, props.disabled, clearButtonProps, clearButtonSize, forceEnableClearButton, clearIconSize, clear, hideClearButton]
  )

  const preparedInputProps = useMemo<Partial<TextFieldProps['InputProps']>>(
    () => ({
      ...props?.InputProps,
      endAdornment: <InputAdornment position={'end'}>
        {props?.InputProps?.endAdornment ?? <></>}
        {endAdornmentClearButton}
      </InputAdornment>
    }),
    [endAdornmentClearButton, props?.InputProps?.endAdornment, hideClearButton]
  );
  const onChange: TextFieldProps['onChange'] = React.useCallback(
    (e) => {
      props?.onChange?.(e)
    },
    [props.onChange]
  )
  return <MuiTextField
    ref={ref}
    name={name}
    value={value || ''}
    {...props}
    onFocus={_onFocus}
    onChange={onChange}
    InputProps={preparedInputProps}
  />
});

export default TextField;
