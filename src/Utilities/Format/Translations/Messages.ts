namespace Messages {
  export type Language = {
    [key: string]: string;
  }

  export type LanguageMap = {
    [language: string]: Language;
  }
}

class Messages {

  private static mergeLanguage = (
    translations: Messages.LanguageMap,
    languageName: string,
    language: Messages.Language
  ) => {
    if (!translations[languageName]) {
      translations[languageName] = language;
    } else {
      for (const translationKey in language) {
        translations[languageName][translationKey] = language[translationKey];
      }
    }
    return translations;
  };

  public static merge = (
    ...translationPackages: Messages.LanguageMap[]
  ): Messages.LanguageMap => translationPackages.reduce(
    (mergedTranslations, translationPackage) => {
      Object.keys(translationPackage).forEach(
        languageName => Messages.mergeLanguage(
          mergedTranslations,
          languageName,
          translationPackage[languageName]
        )
      )
      return mergedTranslations;
    },
    {}
  );

}

export default Messages;
