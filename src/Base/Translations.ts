interface ILanguage {
    [key: string]: string;
}

export interface ITranslations {
    [language: string]: ILanguage;
}

class Translations {

    private static mergeLanguage = (translations: ITranslations, languageName: string, language: ILanguage) => {
        if (!translations[languageName]) {
            translations[languageName] = language;
        }
        else {
            for (const translationKey in language) {
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

export default Translations;