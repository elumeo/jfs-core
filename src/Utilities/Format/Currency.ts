import Format from '.';

class Currency {

  public static getCurrencySign(currency: string) {
    const tmpValue = new Intl.NumberFormat(
      Format.Locale.selectedLanguage,
      { style: 'currency', currency }
    );
    // We must use ts-ignore because typescript seems not to know that formatToParts exists but it does
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat/formatToParts
    // Still in draft mode but browser support is available
    // @ts-ignore
    const tmpValueParts = tmpValue.formatToParts(0) as string[];
    let sign = '';
    tmpValueParts.forEach((part) => {
      if(part['type'] === 'currency') {
        sign = part['value'];
      }
    });
    return sign;
  }

  public static getCurrency(
    currency: string,
    value: number,
    showFraction = false
  ) {
    if (value === null || value.toString() === '') {
      return '';
    }

    if(showFraction) {
      return new Intl.NumberFormat(
        Format.Locale.selectedLanguage,
        { style: 'currency', currency }
      ).format(value);
    }

    return new Intl.NumberFormat(
      Format.Locale.selectedLanguage,
      { style: 'currency', currency, minimumFractionDigits: 0 }
    ).format(value);
  }
}

export default Currency;
