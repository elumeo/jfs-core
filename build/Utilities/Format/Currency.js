import Format from '.';
class Currency {
    static getCurrencySign(currency) {
        const tmpValue = new Intl.NumberFormat(Format.Locale.selectedLanguage, { style: 'currency', currency });
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