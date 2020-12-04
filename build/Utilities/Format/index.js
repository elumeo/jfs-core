import Translations from './Translations';
import Text from './Text';
import Currency from './Currency';
import PhoneNumber from './PhoneNumber';
import Locale from './Locale';
class Format {
    static formatNumber(value, showFraction = false) {
        return (new Intl.NumberFormat(Locale.locale)
            .format(value - (showFraction
            ? 0
            : value % 1)));
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
Format.formatTime = (value, options = {
    hour: '2-digit',
    minute: '2-digit'
}) => (new Intl.DateTimeFormat(Locale.locale, options)
    .format(new Date(value)));
Format.formatDate = (value, options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}) => (new Intl.DateTimeFormat(Locale.locale, options)
    .format(new Date(value)));
export default Format;
//# sourceMappingURL=index.js.map