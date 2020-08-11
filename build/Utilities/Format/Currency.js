import Format from '.';
class Currency {
    static getCurrencySign(currency) {
        const tmpValue = new Intl.NumberFormat(Format.Locale.selectedLanguage, { style: 'currency', currency });
        // We must use ts-ignore because typescript seems not to know that formatToParts exists but it does
        // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts
        // Still in draft mode but browser support is available
        // @ts-ignore
        const tmpValueParts = tmpValue.formatToParts(0);
        let sign = '';
        tmpValueParts.forEach((part) => {
            if (part['type'] === 'currency') {
                sign = part['value'];
            }
        });
        return sign;
    }
    static getCurrency(currency, value, showFraction = false) {
        if (isNaN(value) || value === null || value.toString() === '') {
            value = 0;
        }
        if (showFraction) {
            return new Intl.NumberFormat(Format.Locale.selectedLanguage, { style: 'currency', currency }).format(value);
        }
        return new Intl.NumberFormat(Format.Locale.selectedLanguage, { style: 'currency', currency, minimumFractionDigits: 0 }).format(value);
    }
}
export default Currency;
//# sourceMappingURL=Currency.js.map