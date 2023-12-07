import { LANGUAGE } from 'Types/Language';
import { matchAllNonNumericOrSeperatorRegex, matchFirstPoint } from './Currency';
import { mapLanguageToLocale } from './Locale';


export const limit = (number: number, min: number, max: number): number => {
  let result = number;
  if (min !== undefined && min !== null) {
    result = result > min
      ? result
      : min >= 0
        ? Math.abs(result)
        : min;
  }
  if (max !== undefined && max !== null) {
    result = Math.min(result, max);
  }
  return result;
}
export const parse = (number = '', min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY, numberOfDecimals = 2, language = LANGUAGE.GERMAN): number => {
  const locale = mapLanguageToLocale(language);
  const decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
  const floatable = number.replace(matchAllNonNumericOrSeperatorRegex, '')
    .replace(new RegExp(decimalSeparator === ',' ? ',' : '.'), '.')
    .replace(matchFirstPoint, '')
  const santized =
    floatable.length === 0
      || floatable.endsWith('.')
      || (floatable.length === 1 && floatable.startsWith('-'))
      ? floatable
      : (+limit((parseFloat(floatable)), min, max).toFixed(numberOfDecimals)).toString()
  return santized as unknown as number;
}
export const getGroupingNumberFormatRegex = (groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => {
  const regexString = `^-?((\\d{1,3}(${groupingSeparator == '.' ? `\\.` : groupingSeparator}\\d{3})*${allowDecimals ? `(${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?)|\\d+(${decimalSeparator == '.' ? `\\.` : decimalSeparator}?\\d{1,2}` : ``})?)$`;
  return new RegExp(regexString, 'g')
}
export const getNonGroupingNumberFormatRegex = (decimalSeparator: string, allowDecimals: boolean) => {
  const regexString = `^-?(\\d)*${allowDecimals ? `(\\${decimalSeparator == '.' ? `\\.` : decimalSeparator}\\d{1,2})?` : ``}$`;
  return new RegExp(regexString, 'g')
}

export const isValidLocalisedNumber = (value: string | number, groupingSeparator: string, decimalSeparator: string, allowDecimals: boolean) => {
  const isValidWithGrouping = `${value}`.match(getGroupingNumberFormatRegex(groupingSeparator, decimalSeparator, allowDecimals))?.length > 0;
  const isValidWithoutGrouping = `${value}`.match(getNonGroupingNumberFormatRegex(decimalSeparator, allowDecimals))?.length > 0;
  return isValidWithGrouping || isValidWithoutGrouping
}

export const getDivider = (divideValue: number) => divideValue == 0 ? undefined : (input: number, showDecimals: boolean) => {
  if (typeof input !== 'number') {
    return input;
  }
  return showDecimals
    ? (input / divideValue)
    : Math.floor(input / divideValue)
}
export const divideBy100 = getDivider(100);
