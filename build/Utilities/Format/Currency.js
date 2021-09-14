import * as Locale from './Locale';
export const getCurrencySign = (currency) => new Intl.NumberFormat(Locale.locale, { style: 'currency', currency })
    .formatToParts(0)
    .reduce((sign, { type, value }) => sign + (type === 'currency' ? value : ''), '');
export const formatDisplay = (value, min, max) => {
    const val = parseFloat(`${value}`.replace(replaceAllNonNumericOrSeperatorRegex, ''));
    if ((!!min || min === 0) && val < min) {
        return min.toString();
    }
    else if (max && val > max) {
        return max.toString();
    }
    return val.toFixed(2);
};
export const getCurrency = (currency, value, showFraction = false, withCurrencySign = true, withZeroDecimals = false) => {
    const options = {
        style: withCurrencySign ? 'currency' : 'decimal',
        currency,
        maximumFractionDigits: showFraction ? 2 : 0,
        minimumFractionDigits: showFraction && ((value % 1 !== 0) || withZeroDecimals) ? 2 : 0,
    };
    return new Intl.NumberFormat(Locale.locale, options).format(value);
};
export const intlThousandsSeperator = new Intl.NumberFormat(Locale.locale)
    .format(1111)
    .replace(/1/g, '');
export const intlDecSeparator = new Intl.NumberFormat(Locale.locale)
    .format(1.1)
    .replace(/1/g, '');
export const replaceAllNonNumericOrSeperatorRegex = /[^0-9.,-]/;
