declare class Currency {
    static getCurrencySign(currency: string): string;
    static getCurrency(currency: string, value: number, showFraction?: boolean): string;
}
export default Currency;
