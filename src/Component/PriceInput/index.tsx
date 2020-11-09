import React, { useState, useEffect,  useRef } from 'react';
import { TextField, TextFieldProps } from 'react-md';
import Currency from '../../Utilities/Format/Currency';
import uuid from 'uuid'

type TPriceInputProps = {
  currency: string;
  selectOnFocus?: boolean;
  rawOnChange?: (value: number | string, event: Event) => void
}
const PriceInput = ({
                      id = `price-input-${uuid()}`,
                      selectOnFocus,
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
                      onFocus,
                      onBlur,
                      rawOnChange,
                      ...rest
                    }: TPriceInputProps &  TextFieldProps) => {
  const {getCurrency: currencyFormatter} = Currency;
  const [localValue, setLocalValue] = useState('');
  const inputref = useRef(null)
  const [focused, setFocused] = useState(false)
  useEffect(() => {
    if (value) {
      setLocalValue(parseFloat(value.toString()).toFixed(2));
    }
  }, [value])
  useEffect(() => {
    if (selectOnFocus) {
      if ( focused && inputref?.current?.getField?.()?.select){
        inputref?.current?.getField?.()?.select()
      }
    }
  }, [inputref?.current, selectOnFocus, focused])
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
    if (!isNaN(formattedValue)) {
      if (!!min && formattedValue < min) {
        onChange(min.toFixed(2), null);
      } else if (!!max && (formattedValue > max)) {
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
      ref={inputref}
      id={id}
      value={focused ? localValue : currencyFormatter(currency, value as number, true)}
      onFocus={(e) => {
        setFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        submitValue();
        onBlur?.(e);
      }}
      inputClassName={inputClassName}
      className={className}
      onChange={(v, e) => {
        this._onChange(v);
        rawOnChange?.(v, e);
      }}
      label={label}
      error={error}
      errorText={errorText}
      helpText={helpText}
      {...rest}
    />
  );
};
export default PriceInput
