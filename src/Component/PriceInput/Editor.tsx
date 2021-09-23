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
  selectOnFocus?: boolean;
  value: React.ReactText;
  min?: number;
  max?: number;
} & Partial<StandardTextFieldProps>;

const Editor: React.FC<Props> = ({
  currency = useCurrency(),
  value = 0.0,
  selectOnFocus = true,
  min = null,
  max = null,
  ...props
}) => {
  const onFocus = React.useCallback(
    e => {
      if (selectOnFocus) {
        e.target.select();
      }
    },
    [selectOnFocus],
  );

  return (
    <TextField
      value={value}
      autoFocus
      onFocus={onFocus}
      type={'number'}
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
      {...props}
    />
  );
};
export default memo(Editor);
