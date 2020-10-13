import Translations from './Translations';
import Text from './Text';
import Currency from './Currency';
import PhoneNumber from './PhoneNumber';
import Locale from './Locale';
class Format {
    static formatNumber(value, showFraction = false) {
        if (showFraction) {
            return new Intl.NumberFormat(Locale.locale).format(value);
        }
        return new Intl.NumberFormat(Locale.locale, { minimumFractionDigits: 0 }).format(value);
    }
}
Format.Locale = Locale;
Format.Translations = Translations;
Format.Text = Text;
Format.Currency = Currency;
Format.PhoneNumber = PhoneNumber;
Format.mapProductLanguageToLocale = (productLanguage) => {
    switch (productLanguage) {
        case 'en':
            return 'en_gb';
        case 'es':
            return 'es_es';
        case 'fr':
            return 'fr_fr';
        case 'it':
            return 'it_it';
        case 'nl':
            return 'nl_nl';
        case 'de':
        default:
            return 'de_de';
    }
};
Format.formatTime = (value, options = { hour: '2-digit', minute: '2-digit' }) => new Intl.DateTimeFormat(Locale.locale, options).format(new Date(value));
Format.formatDate = (value) => (new Intl.DateTimeFormat(Locale.locale)
    .format(new Date(value)));
export default Format;
//# sourceMappingURL=index.js.map