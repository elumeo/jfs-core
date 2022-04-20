import React, { memo } from 'react';
import { TextField, StandardTextFieldProps, InputAdornment } from '@material-ui/core';
import { Currency } from 'Utilities/Format';
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';

type Props = {
  currency: string;
  value: React.ReactText;
  showDecimals?: boolean
  min?: number
  max?: number
} & Partial<StandardTextFieldProps>;

const Display = ({ currency, value = 0.0, showDecimals, min, max, ...props }: Props) => {
  const sanitized = React.useMemo(() => Currency.formatDisplay(value, min, max), [value, min, max]);
  React.useEffect(() => {
    props?.onChange({ target: { value: sanitized } } as React.ChangeEvent<HTMLInputElement>);
  }, [sanitized]);
  const display = React.useMemo(
    () => Currency.getCurrency(currency, parseFloat(sanitized), true, false, showDecimals),
    [sanitized, currency, showDecimals]
  );
  const [adornmentType, adornmentPosition, styles] = usePriceFieldAdornment(currency);

  return <TextField
    {...props}
    value={display}
    InputProps={{
      [adornmentType]: <InputAdornment position={adornmentPosition} style={styles}>
        {Currency.getCurrencySign(currency)}
      </InputAdornment>
    }}
  />;
};
export default memo(Display);
