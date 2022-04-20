import React, { memo } from 'react';
import { TextField, StandardTextFieldProps, InputAdornment, TextFieldProps } from '@material-ui/core';
import { Currency } from 'Utilities/Format';
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';

export type Props = {
  currency: string;
  selectOnFocus?: boolean;
  value: React.ReactText;
  min?: number;
  max?: number;
} & Partial<StandardTextFieldProps>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Editor = ({ currency, value = 0.0, selectOnFocus = true, min = null, max = null, ...props }: Props) => {
  const onFocus = React.useCallback<TextFieldProps['onFocus']>(event => {
    if (selectOnFocus) {
      event.target.select();
    }
  }, [selectOnFocus]);
  const [adornmentType, adornmentPosition, styles] = usePriceFieldAdornment(currency);

  return <TextField
    value={value}
    autoFocus
    onFocus={onFocus}
    type={'number'}
    InputProps={{
      [adornmentType]: <InputAdornment position={adornmentPosition} style={styles}>{Currency.getCurrencySign(currency)}</InputAdornment>
    }}
    {...props}
  />;
};
export default memo(Editor);
