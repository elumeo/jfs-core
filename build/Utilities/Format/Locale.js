"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapLanguageToLocale = exports.mapProductLanguageToLocale = exports.setLocale = exports.locale = void 0;
exports.locale = 'en-GB';
var setLocale = function (next) {
    exports.locale = next;
};
exports.setLocale = setLocale;
var mapProductLanguageToLocale = function (productLanguage) {
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
exports.mapProductLanguageToLocale = mapProductLanguageToLocale;
var mapLanguageToLocale = function (language) {
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
exports.mapLanguageToLocale = mapLanguageToLocale;
