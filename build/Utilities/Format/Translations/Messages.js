class Messages {
}
Messages.mergeLanguage = (translations, languageName, language) => {
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
Messages.merge = (...translationPackages) => translationPackages.reduce((mergedTranslations, translationPackage) => {
    Object.keys(translationPackage).forEach(languageName => Messages.mergeLanguage(mergedTranslations, languageName, translationPackage[languageName]));
    return mergedTranslations;
}, {});
export default Messages;
//# sourceMappingURL=Messages.js.map