import React, { memo } from 'react';
import { TextField, StandardTextFieldProps, InputAdornment } from '@material-ui/core';
import useCurrency from 'Effect/useCurrency';
import { Currency } from 'Utilities/Format';

type Props = {
  currency?: string;
  selectOnFocus?: boolean
  value: React.ReactText
  min?: number
  max?: number
} & Partial<StandardTextFieldProps>

const Editor: React.FC<Props> = ({ currency = useCurrency(), value = 0.00, selectOnFocus = true, min = null, max = null, ...props }) => {
  const sanitized = React.useMemo(() => Currency.formatDisplay(value, min, max), [value, min, max])
  const onFocus = React.useCallback((e) => {
    if (selectOnFocus) {
      e.target.select()
    }
  }, [selectOnFocus])
  const _onBlur: StandardTextFieldProps['onBlur'] = (e) => {
    props?.onChange?.({ target: { value: sanitized } } as React.ChangeEvent<HTMLInputElement>)
    props?.onBlur?.(e)
  }

  return (
    <TextField
      {...props}
      value={value}
      autoFocus
      onFocus={onFocus}
      onBlur={_onBlur}
      InputProps={{
        [currency.toLowerCase() === 'eur' ? 'endAdornment' : 'startAdornment']: <InputAdornment position={currency.toLowerCase() === 'eur' ? 'end' : 'start'}
          style={{ userSelect: 'none' }}>{Currency.getCurrencySign(currency)}</InputAdornment>
      }}
    />
    );
};
export default memo(Editor);
