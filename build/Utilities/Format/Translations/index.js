import { IntlMessageFormat } from 'intl-messageformat';
import Notifier from '../../Notifier';
import Messages from './Messages';
import Locale from '../Locale';
class Translations {
}
Translations.mapLocaleToLanguage = (locale) => {
    if (locale === 'de-DE') {
        return 'de';
    }
    else if (locale === 'en-GB') {
        return 'en';
    }
    else if (locale === 'it-IT') {
        return 'it';
    }
    else {
        return null;
    }
};
Translations.messages = {};
Translations.addMessages = (newMessages) => {
    Translations.messages = Messages.merge(Translations.messages, newMessages);
};
Translations.formatMessage = ({ id }, values) => {
    const language = Translations.mapLocaleToLanguage(Locale.locale);
    if (Translations.messages[language][id]) {
        const message = new IntlMessageFormat(Translations.messages[language][id]);
        return message.format(values);
    }
    else {
        Notifier.warn(`Missing translation for '${id}' in locale '${Locale.locale}'`);
        return id;
    }
};
export default Translations;
//# sourceMappingURL=index.js.map