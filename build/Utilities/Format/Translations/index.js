import { IntlMessageFormat } from 'intl-messageformat';
import Notifier from '../../Notifier';
import Messages from './Messages';
import Locale from '../Locale';
class Translations {
}
Translations.messages = {};
Translations.addMessages = (newMessages) => {
    Translations.messages = Messages.merge(Translations.messages, newMessages);
};
Translations.formatMessage = ({ id }, values) => {
    if (Translations.messages[Locale.selectedLanguage][id]) {
        const message = new IntlMessageFormat(Translations.messages[Locale.selectedLanguage][id]);
        return message.format(values);
    }
    else {
        const locale = Locale.selectedLanguage;
        Notifier.warn(`Missing translation for '${id}' in locale '${locale}'`);
        return id;
    }
};
export default Translations;
//# sourceMappingURL=index.js.map