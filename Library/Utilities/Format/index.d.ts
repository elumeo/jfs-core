import Translations from './Translations';
import Text from './Text';
import Currency from './Currency';
import PhoneNumber from './PhoneNumber';
import Locale from './Locale';
declare class Format {
    static Locale: typeof Locale;
    static Translations: typeof Translations;
    static Text: typeof Text;
    static Currency: typeof Currency;
    static PhoneNumber: typeof PhoneNumber;
    static mapProductLanguageToLocale: (productLanguage: string) => "en_gb" | "es_es" | "fr_fr" | "it_it" | "nl_nl" | "de_de";
    static formatNumber(value: number, showFraction?: boolean): string;
    static formatTime: (value: string | Date) => string;
    static formatDate: (value: string | Date) => string;
}
export default Format;
