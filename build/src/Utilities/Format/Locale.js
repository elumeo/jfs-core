export let locale = 'en-GB';
export const setLocale = (next) => {
    locale = next;
};
export const mapProductLanguageToLocale = (productLanguage) => {
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
export const mapLanguageToLocale = (language) => {
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
