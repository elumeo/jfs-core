import React from 'react';
import { InputAdornment, StandardTextFieldProps, TextField, } from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';
import { Currency, Number as FormatNumber } from 'Utilities/Format';

type Props = {
  currency?: string;
  selectOnFocus?: boolean;
  value: React.ReactText;
  min?: number;
  max?: number;
  showDecimals?: boolean
  onChange?: StandardTextFieldProps['onChange'];
} & Partial<StandardTextFieldProps>;

const PriceField = ({
  currency = 'eur',
  value = 0.0,
  selectOnFocus = true,
  showDecimals = false,
  min,
  max,
  ...props
}: Props) => {
  const configCurrency = useCurrency();
  const ref = React.useRef(null)
  const finalCurrency = currency ?? configCurrency;
  const display = Currency.getCurrency(finalCurrency, isNaN(Number(value)) ? 0 : Number(value), true, false, showDecimals)
  const [adornmentType, adornmentPosition, styles] = usePriceFieldAdornment(finalCurrency);
  const [_focused, setFocused] = React.useState(props.focused);
  React.useEffect(() => {
    if (selectOnFocus && _focused) {
      ref.current.select();
    }
  }, [_focused, selectOnFocus]);
  const _onFocus: StandardTextFieldProps['onFocus'] = React.useCallback(event => {
    setFocused(true);
    props?.onFocus?.(event);
  }, [props?.onFocus, setFocused, selectOnFocus]);

  const _onBlur: StandardTextFieldProps['onBlur'] = React.useCallback(event => {
    props?.onBlur?.(event);
    setFocused(false);
    if (isNaN(parseFloat(value as string))) {
      props.onChange({ ...event, target: { ...event.target, value: '0' } } as React.ChangeEvent<HTMLInputElement>)
    }
  }, [setFocused, props?.onBlur, value]);

  const _onChange: StandardTextFieldProps['onChange'] = React.useCallback((event) => {
    const _value = event.target.value;
    props?.onChange?.(
      {
        ...event, target: {
          ...event.target,
          value: `${FormatNumber.parse(_value, min, max)}`
        }
      });
  }, [props?.onChange, min, max,]);
  const _InputProps = React.useMemo(() => (
    {
      [adornmentType]: <InputAdornment position={adornmentPosition} style={styles}>{Currency.getCurrencySign(currency)}</InputAdornment>,
      ...props?.InputProps
    }),
    [adornmentPosition, adornmentType, currency, props?.InputProps, styles]
  );
  return (
    <TextField
      variant='standard'
      inputRef={ref}
      {...props}
      value={_focused ? value : display}
      InputProps={_InputProps}
      onChange={_onChange}
      onFocus={_onFocus}
      onBlur={_onBlur}
    />)
};
export default PriceField;
