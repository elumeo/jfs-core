import React, { useEffect } from 'react';
import { InputAdornment, Typography } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import usePriceFieldAdornment, { AdornmentPosition } from 'Effect/usePriceFieldAdornment';
import { Currency } from 'Utilities/Format';
import { useIntl } from 'react-intl';
import { mapLanguageToLocale } from 'Utilities/Format/Locale';
import { LANGUAGE } from 'Types/Language';
import { parseInt } from 'lodash';
import { getLocaleString, sanitize, toLocaleStringFractionOptions } from './PriceInput.helper';
import { divideBy100, getDecimalSeparator, getGroupingSeparator, isValidLocalisedNumber } from 'Utilities/Format/Number';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

export type Props = {
  language?: LANGUAGE;
  currency?: string;
  selectOnFocus?: boolean;
  valueInCent?: number;
  min?: number; //@INFO: min amount in cent
  max?: number; //@INFO: max amount in cent
  showDecimals?: boolean
  textFieldProps?: Omit<TextFieldProps,
    'value'
    | 'selectOnFocus'
    | 'error'
    | 'onFocus'
    | 'onBlur'
    | 'onChange'
    | 'InputProps'
    | 'disabled'
    | 'required'
  >,
  disabled?: TextFieldProps['disabled'],
  setValue?: (value: number) => void,
  currencyPosition?: AdornmentPosition
  required?: boolean
}

const PriceField: React.FC<Props> = ({
  currency = 'eur',
  valueInCent,
  language = LANGUAGE.GERMAN,
  selectOnFocus = false,
  showDecimals = false,
  min = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  textFieldProps,
  currencyPosition = AdornmentPosition.end,
  disabled,
  setValue,
  required,
}) => {
  const [position, at] = usePriceFieldAdornment(currencyPosition)
  const { formatNumber, formatMessage } = useIntl()
  const locale = mapLanguageToLocale(language);
  const [localValue, setLocalValue] = React.useState(getLocaleString(locale, divideBy100(valueInCent, showDecimals), true, showDecimals))
  const decimalSeparator = getDecimalSeparator(locale)
  const groupingSeparator = getGroupingSeparator(locale)
  const outOfRange = (!!valueInCent)
    && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max))
  const isLocalValueValid = isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals) || (!required && (localValue == null || localValue == ''));
  const hasErrors = !isLocalValueValid || outOfRange;

  useEffect(() => {
    if (valueInCent === null) {
      setLocalValue(null);
    } else {
      const prepared = getLocaleString(locale, divideBy100(valueInCent, showDecimals), false, showDecimals)
      const _isValidValue = isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals);
      if (!_isValidValue || sanitize(localValue, decimalSeparator) !== sanitize(prepared, decimalSeparator)) {
        setLocalValue(getLocaleString(locale, divideBy100(valueInCent, showDecimals), true, showDecimals))
      }
    }
  }, [valueInCent]);

  const _onChange: TextFieldProps['onChange'] = (e) => {
    const euroValue = e.target.value;
    const _localValue = euroValue ? (euroValue).replace(/[^0-9.,-]*/g, '') : null;
    const _sanitizedValue = sanitize(_localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValidLocalisedNumber(_localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    setLocalValue(_localValue);
    if (_sanitizedValue && _isValidValue || _localValue == null) {
      setValue(_localValue == null ? null : parseInt(_sanitizedValue));
    }
  }

  const _onBlur: TextFieldProps['onBlur'] = () => {
    const _sanitizedValue = sanitize(localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    const parsedValue = !_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue);
    if (parsedValue !== null) {
      const localizedValue = getLocaleString(locale, divideBy100(parsedValue, showDecimals), true, showDecimals)
      setLocalValue(localizedValue);
    } else {
      setValue(valueInCent);
      setLocalValue(!divideBy100(valueInCent, showDecimals)
        ? null
        : getLocaleString(locale, divideBy100(valueInCent, showDecimals), true, showDecimals)
      );
    }
  }

  const _onFocus: TextFieldProps['onFocus'] = () => {
    const _sanitizedValue = sanitize(localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    const parsedValue = !_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue);
    if (parsedValue !== null) {
      const localizedValue = getLocaleString(locale, divideBy100(parsedValue, showDecimals), false, showDecimals)
      setLocalValue(localizedValue);
    }
  }

  return <>
    <TextFieldClearButton
      {...textFieldProps as TextFieldProps}
      helperText={hasErrors
        ? outOfRange
          ? `min: ${formatNumber(min / 100, { ...toLocaleStringFractionOptions(showDecimals ? 2 : 0) })} max: ${formatNumber(max / 100, { ...toLocaleStringFractionOptions(showDecimals ? 2 : 0) })}`
          : formatMessage({ id: 'priceField.invalid' })
        : textFieldProps.helperText}
      value={localValue}
      selectOnFocus={selectOnFocus}
      error={hasErrors}
      required={required}
      onFocus={_onFocus}
      onBlur={_onBlur}
      onChange={_onChange}
      hideClearButton={disabled}
      InputProps={{
        [position]: <InputAdornment position={at}>
          <Typography color={disabled
            ? definition.palette.text.disabled
            : 'inherit'}>
            {Currency.getCurrencySign(currency)}
          </Typography>
        </InputAdornment>,
      }}
      disabled={disabled}
    />
  </>
};
export default PriceField;
