"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.limit = void 0;
var Language_1 = require("../../Types/Language");
var Currency_1 = require("./Currency");
var Locale_1 = require("./Locale");
var limit = function (number, min, max) {
    var result = number;
    if (min !== undefined && min !== null) {
        result = result > min
            ? result
            : min >= 0
                ? Math.abs(result)
                : min;
    }
    if (max !== undefined && max !== null) {
        result = Math.min(result, max);
    }
    return result;
};
exports.limit = limit;
var parse = function (number, min, max, numberOfDecimals, language) {
    if (number === void 0) { number = ''; }
    if (min === void 0) { min = Number.NEGATIVE_INFINITY; }
    if (max === void 0) { max = Number.POSITIVE_INFINITY; }
    if (numberOfDecimals === void 0) { numberOfDecimals = 2; }
    if (language === void 0) { language = Language_1.LANGUAGE.GERMAN; }
    var locale = (0, Locale_1.mapLanguageToLocale)(language);
    var decimalSeparator = (1.1).toLocaleString(locale).substring(1, 2);
    var floatable = number.replace(Currency_1.matchAllNonNumericOrSeperatorRegex, '')
        .replace(new RegExp(decimalSeparator === ',' ? ',' : '.'), '.')
        .replace(Currency_1.matchFirstPoint, '');
    var santized = floatable.length === 0
        || floatable.endsWith('.')
        || (floatable.length === 1 && floatable.startsWith('-'))
        ? floatable
        : (+(0, exports.limit)((parseFloat(floatable)), min, max).toFixed(numberOfDecimals)).toString();
    return santized;
};
exports.parse = parse;
