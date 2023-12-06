import React from 'react';
import { InputAdornment } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';
import { Currency } from 'Utilities/Format';
import { useIntl } from 'react-intl';
import { mapLanguageToLocale } from 'Utilities/Format/Locale';
import { LANGUAGE } from 'Types/Language';
import { parseInt } from 'lodash';
import { NumberFormatOptions } from '@formatjs/ecma402-abstract/types/number';

type Props = {
  language?: LANGUAGE;
  currency?: string;
  selectOnFocus?: boolean;
  valueInCent?: number;
  min?: number; //@INFO: min amount in cent
  max?: number; //@INFO: max amount in cent
  showDecimals?: boolean
  textFieldProps?: TextFieldProps,
  setValue?: (value: number) => void
}
const sanitize = (value: string, decimalSeparator: string): string => {
  let returnValue = value;
  if (!returnValue || returnValue == 'null') {
    return null;
  }

  // @INFO: assumptions is, that the user always wants to input euros
  if (!returnValue.includes(decimalSeparator) || returnValue[returnValue.length - 1] === decimalSeparator) {
    if (!returnValue.includes(decimalSeparator)) {
      returnValue = `${value}${decimalSeparator}0`
    } else {
      returnValue = `${value}0`
    }
  }

  // @INFO: bspw: 12.1, 23,5 => 12.10, 23,50
  if (returnValue?.[returnValue.length - 2] === decimalSeparator) {
    returnValue = `${returnValue}0`
  }
  return returnValue.replace(/[^\d-]|(?<=\d)-/g, '');
}
const checkForGroupingNumberFormat = (groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => {
  const regexString = `^-?((\\d{1,3}(${groupingSeparator == '.' ? `\\.` : groupingSeparator}\\d{3})*${allowDecimals ? `(${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?)|\\d+(${decimalSeparator == '.' ? `\\.` : decimalSeparator}?\\d{1,2}` : ``})?)$`;
  return new RegExp(regexString, 'g')
}
const checkForNonGroupingNumberFormat = (decimalSeparator: string, allowDecimals: boolean) => {
  const regexString = `^-?(\\d)*${allowDecimals ? `(\\${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?` : ``}$`;
  return new RegExp(regexString, 'g')
}

const isValid = (value: string | number, groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => {
  const isValidWithGrouping = `${value}`.match(checkForGroupingNumberFormat(groupingSeparator, decimalSeparator, allowDecimals))?.length > 0;
  const isValidWithoutGrouping = `${value}`.match(checkForNonGroupingNumberFormat(decimalSeparator, allowDecimals))?.length > 0;
  return isValidWithGrouping || isValidWithoutGrouping
}

const centToEuro = (valueInCent: number, showDecimals: boolean) => {
  return showDecimals
    ? (valueInCent / 100)
    : Math.floor(valueInCent / 100)
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
                                       setValue,
                                     }) => {
  const [position, at] = usePriceFieldAdornment(currency)
  const { formatNumber, formatMessage } = useIntl()
  const locale = mapLanguageToLocale(language);
  const fraction = showDecimals ? 2 : 0;
  const toLocaleStringFractionOptions: NumberFormatOptions = { minimumFractionDigits: fraction, maximumFractionDigits: fraction };
  const [localValue, setLocalValue] = React.useState(centToEuro(valueInCent, showDecimals).toLocaleString(locale, { style: 'decimal', useGrouping: true, ...toLocaleStringFractionOptions }));
  const decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
  const groupingSeparator = (1000).toLocaleString(locale).substring(1, 2);
  const outOfRange = (!!valueInCent)
    && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max))
  const isLocalValueValid = isValid(localValue, groupingSeparator, decimalSeparator, showDecimals);
  const hasErrors = !isLocalValueValid || outOfRange;

  const _onChange: TextFieldProps['onChange'] = (e) => {
    const euroValue = e.target.value;
    const _localValue = euroValue ? (euroValue).replace(/[^0-9.,-]*/g, '') : null;
    const _sanitizedValue = sanitize(_localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValid(_localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    setLocalValue(_localValue);
    setValue(!_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue));
  }

  const _onBlur: TextFieldProps['onBlur'] = (e) => {
    const _sanitizedValue = sanitize(localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValid(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    const parsedValue = !_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue);
    if (parsedValue !== null) {
      const localizedValue = centToEuro(parsedValue, showDecimals).toLocaleString(locale, { style: 'decimal', ...toLocaleStringFractionOptions });
      setLocalValue(localizedValue);
    }
  }

  const _onFocus: TextFieldProps['onFocus'] = (e) => {
    const _sanitizedValue = sanitize(localValue, decimalSeparator);
    const _isValidValue = _sanitizedValue ? isValid(localValue, groupingSeparator, decimalSeparator, showDecimals) : true;
    const parsedValue = !_sanitizedValue || !_isValidValue ? null : parseInt(_sanitizedValue);
    if (parsedValue !== null) {
      const localizedValue = centToEuro(parsedValue, showDecimals).toLocaleString(locale, { style: 'decimal', useGrouping: false, ...toLocaleStringFractionOptions });
      setLocalValue(localizedValue);
    }
  }

  return <>
    <TextFieldClearButton
      required={required}
      {...textFieldProps}
      value={localValue}
      selectOnFocus={selectOnFocus}
      error={hasErrors}
      helperText={hasErrors ? outOfRange ? `min: ${formatNumber(min / 100, { ...toLocaleStringFractionOptions })} max: ${formatNumber(max / 100, { ...toLocaleStringFractionOptions })}` : formatMessage({id: 'priceField.invalid' }) : textFieldProps.helperText}
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
