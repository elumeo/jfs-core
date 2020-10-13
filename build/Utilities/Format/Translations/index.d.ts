import { PrimitiveType } from 'intl-messageformat';
import Messages from './Messages';
declare namespace Translations {
    type Set = {
        [language: string]: Messages.Language;
    };
}
declare class Translations {
    private static mapLocaleToLanguage;
    private static messages;
    static addMessages: (newMessages: Translations.Set) => void;
    static formatMessage: ({ id }: {
        id: any;
    }, values?: Record<string, PrimitiveType>) => any;
}
export default Translations;
