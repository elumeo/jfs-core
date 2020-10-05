import React, { useState, useEffect } from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import { compose } from 'redux';
import { TextField, TextFieldProps } from 'react-md';
import Currency from 'Utilities/Format/Currency';
import uuid from 'uuid'
type TPriceInputProps = {
  currency: string;
}
const PriceInput = ({
  id = `price-input-${uuid()}`,
  value,
  onChange,
  label,
  error,
  currency,
  errorText,
  inputClassName = '',
  className = 'price-input',
  helpText,
  min,
  max,
  ...rest
}: TPriceInputProps &  InjectedIntlProps & TextFieldProps) => {
  const {getCurrency: currencyFormatter} = Currency;
  const [localValue, setLocalValue] = useState('');
  const [focused, setFocused] = useState(false)
  useEffect( () => {
    if (value) {
      setLocalValue(parseFloat(value.toString()).toFixed(2));
    }
  }, [value])
  const _onChange = (e: React.ReactText, ev) => {
    setLocalValue(e.toString().replace(Currency.replaceAllNonNumericOrSeperatorRegex, ''))
  }
  const submitValue = () => {
    const formattedValue = parseFloat(
      parseFloat(
        localValue
        .toString()
        .replace(Currency.intlDecSeparator, '.')
        )
      .toFixed(2)
      );
    if (!isNaN(formattedValue)){
      if (!!min && formattedValue < min) {
        onChange(min.toFixed(2), null);
      } else if (!!max && (formattedValue > max )){
        onChange(max.toFixed(2), null);
      } else {
        onChange(formattedValue, null);
      }
      setLocalValue(formattedValue.toString())
    } else {
      onChange(0, null)
    }
  }
  return (
    <TextField
            id={id}
            value={focused ? localValue : currencyFormatter(currency, value as number, true) }
            onFocus={() => {
              setFocused(true)
            }}
            onBlur={(e) => {
              setFocused(false);
              submitValue();
            }}
            inputClassName={inputClassName}
            className={className}
            onChange={_onChange}
            label={label}
            error={error}
            errorText={errorText}
            helpText={helpText}
            {...rest}
          />
  );
};
const enhance = compose(injectIntl);
export default enhance(PriceInput);
