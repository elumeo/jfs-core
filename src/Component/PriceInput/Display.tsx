import React, { memo } from 'react';
import {
  TextField,
  StandardTextFieldProps,
  InputAdornment,
} from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';

type Props = {
  currency?: string;
  value: React.ReactText;
  showDecimals?: boolean
  min?: number
  max?: number
} & Partial<StandardTextFieldProps>;

const Display = ({
  currency = useCurrency(),
  value = 0.0,
  showDecimals,
  min,
  max,
  ...props
}: Props) => {
  const sanitized = React.useMemo(() =>
    Currency.formatDisplay(value, min, max)
    ,
    [value, min, max]
  );
  React.useEffect(() => {
    props?.onChange({ target: { value: sanitized } } as React.ChangeEvent<HTMLInputElement>)
  }
    , [sanitized])
  const display = React.useMemo(
    () =>
      Currency.getCurrency(currency, parseFloat(sanitized), true, false, showDecimals),
    [sanitized, currency, showDecimals],
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
