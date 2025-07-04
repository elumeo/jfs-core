"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Language_1 = require("../../Types/Language");
var mapLanguageToDateFormat = function (language) {
    switch (language) {
        case Language_1.LANGUAGE.GERMAN:
            return Language_1.DATE_FORMAT.DE;
        case Language_1.LANGUAGE.ENGLISH:
            return Language_1.DATE_FORMAT.EN;
        case Language_1.LANGUAGE.ITALIAN:
            return Language_1.DATE_FORMAT.IT;
        case Language_1.LANGUAGE.SPANISH:
            return Language_1.DATE_FORMAT.ES;
        case Language_1.LANGUAGE.POLISH:
            return Language_1.DATE_FORMAT.PL; // Assuming Polish uses the same format as English
        default:
            return Language_1.DATE_FORMAT.DE;
    }
};
exports.default = mapLanguageToDateFormat;
