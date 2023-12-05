import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import TextFieldClearButton, { type Props as TextFieldProps } from 'Component/TextField'
import usePriceFieldAdornment from 'Effect/usePriceFieldAdornment';
import { Currency } from 'Utilities/Format';
import { createIntl, createIntlCache, useIntl } from 'react-intl';
import { mapLanguageToLocale } from 'Utilities/Format/Locale';
import { LANGUAGE } from 'Types/Language';
import { satisfies } from 'semver';

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
  if (!returnValue || returnValue == 'null') { return null; }

  // @INFO: if user only inputs integers, the assumptions is, that the user wants to input euros instead of cents

  // if (!returnValue.includes(decimalSeparator) || returnValue[returnValue.length - 1] === decimalSeparator) {
  //   if (!returnValue.includes(decimalSeparator)) {
  //     returnValue = `${value}${decimalSeparator}0`
  //   } else {
  //     returnValue = `${value}0`
  //   }
  // }

  // @INFO: bspw: 12.1, 23,5 => 12.10, 23,50
  if (returnValue?.[returnValue.length - 2] === decimalSeparator) {
    returnValue = `${returnValue}0`
  }
  const sanitizedString = returnValue.replace(/[^\d-]|(?<=\d)-/g, '');
  return sanitizedString;
}
const checkForGroupingNumberFormat = (groupingSeparator: string, decimalSeparator: string) => new RegExp(
  `^-?((\\d{1,3}(${groupingSeparator == '.' ? `\\.` : groupingSeparator}\\d{3})*(${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?)|\\d+(${decimalSeparator == '.' ? `\\.` : decimalSeparator}?\\d{1,2})?)$`,
  'g'
)
const checkForNonGroupingNumberFormat = (decimalSeparator: string) =>
  new RegExp(
    `^-?(\\d)*(\\${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?$`,
    'g'
  )
const isValid = (value: string | number, groupingSeparator: string, decimalSeparator: string) => {

  const isValidWithGrouping = `${value}`.match(checkForGroupingNumberFormat(groupingSeparator, decimalSeparator))?.length > 0
  const isValidWithoutGrouping = `${value}`.match(checkForNonGroupingNumberFormat(decimalSeparator))?.length > 0
  return isValidWithGrouping || isValidWithoutGrouping
}

const PriceField: React.FC<Props> = ({
  currency = 'eur',
  valueInCent,
  language = LANGUAGE.GERMAN,
  selectOnFocus = true,
  showDecimals = false,
  min = -Infinity,
  max = Infinity,
  textFieldProps: { required, ...textFieldProps } = { required: false },
  setValue,
}) => {

  const [position, at] = usePriceFieldAdornment(currency)
  const { formatNumber } = useIntl()
  const locale = mapLanguageToLocale(language);
  const [localValue, setLocalValue] = React.useState((valueInCent ?? '').toLocaleString(locale, { useGrouping: false }));
  const decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
  const groupingSeparator = (1000).toLocaleString(locale).substring(1, 2);
  const sanitizedLocalValue = sanitize(localValue, decimalSeparator);
  const outOfRange = (!!valueInCent)
    && ((min !== -Infinity && valueInCent < min) || (max !== Infinity && valueInCent > max))
  const isLocalValueValid = isValid(localValue, groupingSeparator, decimalSeparator);
  const hasErrors = !isLocalValueValid || outOfRange;
  console.log({ decimalSeparator, groupingSeparator, valueInCent, localValue, sanitizedLocalValue })

  return <>
    <TextFieldClearButton
      required={required}
      {...textFieldProps}
      value={localValue}
      selectOnFocus={selectOnFocus}
      error={hasErrors}
      helperText={hasErrors ? outOfRange ? `min: ${formatNumber(min / 100, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} max: ${formatNumber(max / 100, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'invalid' : ''}
      onBlur={() => {
        setValue(
          isValid(localValue, groupingSeparator, decimalSeparator)
            ? sanitize(localValue, decimalSeparator)
              ? parseInt(sanitize(localValue, decimalSeparator))//Math.min(Math.max(, min), max)
              : null
            : null
        )
      }}
      onChange={(e) => {
        setLocalValue(
          e.target.value ? (e.target.value).replace(/[^0-9.,-]*/g, '') : null
        )

      }}
      InputProps={{
        [position]: <InputAdornment position={at}>{Currency.getCurrencySign(currency)}</InputAdornment>,
      }}
    />
  </>
};
export default PriceField;
