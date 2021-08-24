import React, { memo } from 'react';
import {
  TextField,
  StandardTextFieldProps,
  InputAdornment,
  Input,
  InputProps,
} from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';

type Props = {
  currency?: string;
  value: React.ReactText;
} & Partial<StandardTextFieldProps>;

const Display = ({
  currency = useCurrency(),
  value = 0.0,
  ...props
}: Props) => {
  const sanitized = React.useMemo(() => Currency.formatDisplay(value), [value]);
  const display = React.useMemo(
    () => Currency.getCurrency(currency, parseFloat(sanitized), true, false),
    [sanitized, currency],
  );
  return (
    <TextField
      {...props}
      value={display}
      InputProps={{
        [currency.toLowerCase() === 'eur'
          ? 'endAdornment'
          : 'startAdornment']: (
          <InputAdornment
            position={currency.toLowerCase() === 'eur' ? 'end' : 'start'}
            style={{ userSelect: 'none' }}>
            {Currency.getCurrencySign(currency)}
          </InputAdornment>
        ),
      }}
    />
  );
};
export default memo(Display);
