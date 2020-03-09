import { IntlMessageFormat } from 'intl-messageformat';

import messages from '../Translations.json';

interface ILanguage {
    [key: string]: string;
}

export interface ITranslations {
    [language: string]: ILanguage;
}

class Translations {

    private static selectedLanguage: string;

    private static messages: ITranslations = {};

    public static addMessages = (newMessages: ITranslations) => {
        Translations.messages = Translations.merge(Translations.messages, newMessages);
    };

    public static formatMessage = ({ id }, values?) => {
        if (Translations.messages[Translations.selectedLanguage][id]) {
            const message = new IntlMessageFormat(Translations.messages[Translations.selectedLanguage][id]);
            return message.format(values);
        } else {
            return id;
        }
    };

    public static formatDate(value: string | Date) {
        return new Intl.DateTimeFormat(Translations.selectedLanguage).format(new Date(value));
    }

    public static formatTime(value: string | Date) {
        return new Intl.DateTimeFormat(Translations.selectedLanguage, { hour: '2-digit', minute: '2-digit' }).format(new Date(value));
    }

    public static setSelectedLanguage = (language: string) => {
        Translations.selectedLanguage = language;
    };

    private static mergeLanguage = (translations: ITranslations, languageName: string, language: ILanguage) => {
        if (!translations[languageName]) {
            translations[languageName] = language;
        } else {
            for (const translationKey in language) {
                // noinspection JSUnfilteredForInLoop
                translations[languageName][translationKey] = language[translationKey];
            }
        }
        return translations;
    };

    public static merge = (...translationPackages: ITranslations[]): ITranslations => {
        return translationPackages.reduce(
            (mergedTranslations, translationPackage) => {
                for (const languageName in translationPackage) {
                    Translations.mergeLanguage(
                        mergedTranslations,
                        languageName,
                        translationPackage[languageName]
                    );
                }
                return mergedTranslations;
            },
            {}
        )

    }

}

Translations.addMessages(messages);

export default Translations;