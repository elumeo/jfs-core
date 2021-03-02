class Locale {
}
Locale.locale = 'en-GB';
Locale.setLocale = (locale) => {
    Locale.locale = locale;
};
Locale.mapProductLanguageToLocale = (productLanguage) => {
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
Locale.mapLanguageToLocale = (language) => {
    if (language === 'de') {
        return 'de-DE';
    }
    else if (language === 'en') {
        return 'en-GB';
    }
    else if (language === 'it') {
        return 'it-IT';
    }
    else {
        return null;
    }
};
export default Locale;
//# sourceMappingURL=Locale.js.map