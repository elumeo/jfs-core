import React, { memo } from 'react';
import {
  TextField,
  StandardTextFieldProps,
  InputAdornment,
  Input,
  InputProps,
} from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import Editor from './Editor';
import Display from './Display';

type Props = {
  currency?: string;
  selectOnFocus?: boolean;
  value: React.ReactText;
  min?: number;
  max?: number;
  showDecimals?: boolean
} & Partial<StandardTextFieldProps>;

const PriceField: React.FC<Props> = ({
  currency = useCurrency(),
  value = 0.0,
  selectOnFocus = true,
  showDecimals = false,
  ...props
}) => {
  const [_focused, setFocused] = React.useState(props.focused);
  const _onBlur = React.useCallback(
    e => {
      props?.onBlur?.(e);
      setFocused(false);
    },
    [setFocused, props?.onBlur],
  );

  const _onFocus: StandardTextFieldProps['onFocus'] = React.useCallback(
    e => {
      setFocused(true);
      props?.onFocus?.(e);
    },
    [setFocused, selectOnFocus, props?.onFocus],
  );

  return _focused ? (
    <Editor
      value={value}
      onChange={props.onChange}
      onBlur={_onBlur}
      selectOnFocus={selectOnFocus}
      {...props}
    />
  ) : (
    <Display
      value={value}
      onChange={props.onChange}
      showDecimals={showDecimals}
      onFocus={_onFocus}
      {...props}
    />
  );
};
export default memo(PriceField);
