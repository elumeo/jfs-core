declare class Currency {
    static getCurrencySign(currency: string): string;
    static getCurrency(currency: string, value: number, showFraction?: boolean): string;
    static intlThousandsSeperator: string;
    static intlDecSeparator: string;
    static replaceAllNonNumericOrSeperatorRegex: RegExp;
}
export default Currency;
