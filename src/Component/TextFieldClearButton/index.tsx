import React, { useMemo } from 'react';
import { IconButton, IconProps, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import Clear from '@mui/icons-material/Clear';
import { IconButtonProps } from '@mui/material/IconButton';

export type TextFieldClearButtonProps = TextFieldProps & {
  clearButtonSize?: IconButtonProps['size'];
  clearButtonProps?: IconButtonProps;
  clearIconSize?: IconButtonProps['size'] & IconProps['fontSize']
  hideClearButton?: boolean;
  forceEnableClearButton?: boolean;
};
const TextFieldClearButton = React.forwardRef<HTMLDivElement, TextFieldClearButtonProps>(({
  clearButtonSize = 'small',
  clearIconSize = 'small',
  value = null,
  hideClearButton,
  forceEnableClearButton,
  clearButtonProps,
  name,
  ...props
}, ref) => {
  const isDirty = value !== null && value !== undefined && value !== '';
  const clear = React.useCallback(
    () => {
      props?.onChange?.({ target: { value: null } } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    },
    [props.onChange]
  )
  const endAdornmentClearButton = React.useMemo(
    () => (forceEnableClearButton || isDirty) && !hideClearButton ? (
      <IconButton
        disabled={props.disabled && !forceEnableClearButton}
        size={clearButtonSize}
        color={'secondary'}
        onClick={clear}
        {...clearButtonProps}
      >
        <Clear fontSize={clearIconSize} />
      </IconButton>)
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
      props.onChange(e)
    },
    [props.onChange]
  )
  return <TextField
    ref={ref}
    name={name}
    value={value || ''}
    autoComplete={'new-password'}
    {...props}
    InputProps={preparedInputProps}
    onChange={onChange}
  />
});

export default TextFieldClearButton
