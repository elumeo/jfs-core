import * as Locale from './Locale';
export const getCurrencySign = (currency) => {
    const value = new Intl.NumberFormat(Locale.locale, { style: 'currency', currency });
    // We must use ts-ignore because typescript seems not to know that formatToParts exists but it does
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts
    // Still in draft mode but browser support is available
    // @ts-ignore
    const valueParts = value.formatToParts(0);
    let sign = '';
    valueParts.forEach(part => {
        if (part['type'] === 'currency') {
            sign = part['value'];
        }
    });
    return sign;
};
export const getCurrency = (currency, value, showFraction = false) => {
    if (isNaN(value) || value === null || value.toString() === '') {
        value = 0;
    }
    if (showFraction) {
        return new Intl.NumberFormat(Locale.locale, { style: 'currency', currency }).format(value);
    }
    return new Intl.NumberFormat(Locale.locale, { style: 'currency', currency, minimumFractionDigits: 0 }).format(value);
};
export const intlThousandsSeperator = (new Intl.NumberFormat()
    .format(1111)
    .replace(/1/g, ''));
export const intlDecSeparator = (new Intl.NumberFormat()
    .format(1.1)
    .replace(/1/g, ''));
export const replaceAllNonNumericOrSeperatorRegex = /[^0-9.,-]/;
