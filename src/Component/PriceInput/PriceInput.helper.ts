

import * as Country from 'Types/Country';
import { FormatNumberOptions } from 'react-intl';
export const sanitize = (value: string, decimalSeparator: string): string => {
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
export const toLocaleStringFractionOptions = (fraction = 2): FormatNumberOptions => ({ minimumFractionDigits: fraction, maximumFractionDigits: fraction });

export const getLocaleString = (locale: Country.Locale, input: number, grouping = true, showDecimals = true) => (input ?? '')
  .toLocaleString(locale, { style: 'decimal', useGrouping: grouping, ...toLocaleStringFractionOptions(showDecimals ? 2 : 0) })
