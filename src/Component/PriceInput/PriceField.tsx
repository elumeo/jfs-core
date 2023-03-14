import React from 'react';
import { InputAdornment } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import useCurrency from 'Effect/useCurrency';
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';
import { Currency, Number as FormatNumber } from 'Utilities/Format';

type Props = {
  currency?: string;
  selectOnFocus?: boolean;
  value: string | number;
  min?: number;
  max?: number;
  showDecimals?: boolean
} & TextFieldProps

const PriceField: React.FC<Props> = ({
  currency = 'eur',
  value = 0.0,
  selectOnFocus = true,
  showDecimals = true,
  min,
  max,
  ...props
}) => {
  const configCurrency = useCurrency();
  const ref = React.useRef(null)
  const finalCurrency = currency ?? configCurrency;
  const display = value === ''
    ? ''
    : Currency.getCurrency(
      finalCurrency,
      isNaN(Number(value))
        ? 0
        : Number(value),
      true,
      false,
      showDecimals
    )
  const [adornmentType, adornmentPosition, styles] = usePriceFieldAdornment(finalCurrency);
  const [_focused, setFocused] = React.useState(props.focused);
  React.useEffect(() => {
    if (selectOnFocus && _focused) {
      ref.current.select();
    }
  }, [_focused, selectOnFocus]);
  const _onFocus: TextFieldProps['onFocus'] = React.useCallback(event => {
    setFocused(true);
    props?.onFocus?.(event);
  }, [props?.onFocus, setFocused, selectOnFocus]);

  const _onBlur: TextFieldProps['onBlur'] = React.useCallback(event => {
    props?.onBlur?.(event);
    setFocused(false);
    if (isNaN(parseFloat(value as string))) {
      props.onChange({ ...event, target: { ...event.target, value: null } } as React.ChangeEvent<HTMLInputElement>)
    }
  }, [setFocused, props?.onBlur, value]);

  const _onChange: TextFieldProps['onChange'] = React.useCallback((event) => {
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
      [adornmentType]: <InputAdornment position={adornmentPosition} sx={styles}>{Currency.getCurrencySign(currency)}</InputAdornment>,
      ...props?.InputProps
    }),
    [adornmentPosition, adornmentType, currency, props?.InputProps, styles]
  );
  return (
    <TextFieldClearButton
      inputRef={ref}
      value={_focused ? value : display}
      InputProps={_InputProps}
      onChange={_onChange}
      onFocus={_onFocus}
      onBlur={_onBlur}
      {...props}
    />)
};
export default PriceField;
