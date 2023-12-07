import React, { useEffect } from 'react';
import { InputAdornment } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import usePriceFieldAdornment, { AdornmentPosition } from 'Effect/usePriceFieldAdornment';
import { Currency } from 'Utilities/Format';
import { useIntl } from 'react-intl';
import { mapLanguageToLocale } from 'Utilities/Format/Locale';
import { LANGUAGE } from 'Types/Language';
import { parseInt } from 'lodash';
import { sanitize } from './PriceInput.helper';
import { divideBy100, isValidLocalisedNumber } from 'Utilities/Format/Number';

type Props = {
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
  >,
  setValue?: (value: number) => void,
  currencyPosition?: AdornmentPosition
}

const PriceField: React.FC<Props> = ({
  currency = 'eur',
  valueInCent,
  language = LANGUAGE.GERMAN,
  selectOnFocus = false,
  showDecimals = false,
  min = -Infinity,
  max = Infinity,
  textFieldProps: { required, ...textFieldProps } = { required: false },
  currencyPosition = AdornmentPosition.end,
  setValue,
}) => {
  const [position, at] = usePriceFieldAdornment(currencyPosition)
  const { formatNumber, formatMessage } = useIntl()
  const locale = mapLanguageToLocale(language);
  const fraction = showDecimals ? 2 : 0;
  const toLocaleStringFractionOptions: Parameters<typeof formatNumber>[1] = { minimumFractionDigits: fraction, maximumFractionDigits: fraction };
  const [localValue, setLocalValue] = React.useState((divideBy100(valueInCent, showDecimals) ?? '').toLocaleString(locale, { style: 'decimal', useGrouping: true, ...toLocaleStringFractionOptions }));
  const decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
  const groupingSeparator = (1000).toLocaleString(locale).substring(1, 2);
  const outOfRange = (!!valueInCent)
    && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max))
  const isLocalValueValid = isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals);
  const hasErrors = !isLocalValueValid || outOfRange;

  useEffect(() => {
    if (valueInCent === null) {
      setLocalValue(null);
    } else {
      const prepared = (divideBy100(valueInCent, showDecimals) ?? '').toLocaleString(locale, { style: 'decimal', useGrouping: false, ...toLocaleStringFractionOptions })
      const _isValidValue = isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals);
      if (!_isValidValue || sanitize(localValue, decimalSeparator) !== sanitize(prepared, decimalSeparator)) {
        setLocalValue((divideBy100(valueInCent, showDecimals) ?? '').toLocaleString(locale, { style: 'decimal', useGrouping: true, ...toLocaleStringFractionOptions }))
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
      const localizedValue = divideBy100(parsedValue, showDecimals).toLocaleString(locale, { style: 'decimal', ...toLocaleStringFractionOptions });
      setLocalValue(localizedValue);
    } else {
      setValue(valueInCent);
      setLocalValue(!divideBy100(valueInCent, showDecimals) ? null : divideBy100(valueInCent, showDecimals).toLocaleString(locale, { style: 'decimal', useGrouping: true, ...toLocaleStringFractionOptions }));
    }
  }

  const _onFocus: TextFieldProps['onFocus'] = () => {
    const _sanitizedValue = sanitize(localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValidLocalisedNumber(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    const parsedValue = !_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue);
    if (parsedValue !== null) {
      const localizedValue = divideBy100(parsedValue, showDecimals).toLocaleString(locale, { style: 'decimal', useGrouping: false, ...toLocaleStringFractionOptions });
      setLocalValue(localizedValue);
    }
  }

  return <>
    <TextFieldClearButton
      required={required}
      {...textFieldProps as TextFieldProps}
      helperText={hasErrors
        ? outOfRange
          ? `min: ${formatNumber(min / 100, { ...toLocaleStringFractionOptions })} max: ${formatNumber(max / 100, { ...toLocaleStringFractionOptions })}`
          : formatMessage({ id: 'priceField.invalid' })
        : textFieldProps.helperText}
      value={localValue}
      selectOnFocus={selectOnFocus}
      error={hasErrors}
      onFocus={_onFocus}
      onBlur={_onBlur}
      onChange={_onChange}
      InputProps={{
        [position]: <InputAdornment position={at}>{Currency.getCurrencySign(currency)}</InputAdornment>,
      }}
    />
  </>
};
export default PriceField;
