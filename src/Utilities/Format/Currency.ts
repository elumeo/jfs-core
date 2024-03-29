import * as Locale from './Locale';

export const getCurrencySign = (currency: string): string =>
  new Intl.NumberFormat(Locale.locale, { style: 'currency', currency })
    .formatToParts(0)
    .reduce(
      (sign, { type, value }) => sign + (type === 'currency' ? value : ''),
      '',
    );

export const getCurrency = (
  currency: string,
  value: number,
  showFraction = false,
  withCurrencySign = true,
  withZeroDecimals = false
): string => {
  const options: Intl.NumberFormatOptions = {
    style: withCurrencySign ? 'currency' : 'decimal',
    currency,
    maximumFractionDigits: showFraction ? 2 : 0,
    minimumFractionDigits: showFraction && ((value % 1 !== 0) || withZeroDecimals) ? 2 : 0,
  };
  return new Intl.NumberFormat(Locale.locale, options).format(value);
};
