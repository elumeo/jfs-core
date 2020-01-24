export type TranslationList = {
    [translation: string]: string;
}

export interface ITranslations {
    [language: string]: TranslationList;
}

export interface IMissingLanguageKeys {
    languageName: string;
    missingKeys: ITranslations;
}