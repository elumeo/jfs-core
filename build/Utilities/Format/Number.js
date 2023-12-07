"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divideBy100 = exports.getDivider = exports.isValidLocalisedNumber = exports.getNonGroupingNumberFormatRegex = exports.getGroupingNumberFormatRegex = exports.parse = exports.limit = void 0;
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
var getGroupingNumberFormatRegex = function (groupingSeparator, decimalSeparator, allowDecimals) {
    var regexString = "^-?((\\d{1,3}(".concat(groupingSeparator == '.' ? "\\." : groupingSeparator, "\\d{3})*").concat(allowDecimals ? "(".concat(decimalSeparator == '.' ? "\\." : decimalSeparator, "\\d{1,2})?)|\\d+(").concat(decimalSeparator == '.' ? "\\." : decimalSeparator, "?\\d{1,2}") : "", ")?)$");
    return new RegExp(regexString, 'g');
};
exports.getGroupingNumberFormatRegex = getGroupingNumberFormatRegex;
var getNonGroupingNumberFormatRegex = function (decimalSeparator, allowDecimals) {
    var regexString = "^-?(\\d)*".concat(allowDecimals ? "(\\".concat(decimalSeparator == '.' ? "\\." : decimalSeparator, "\\d{1,2})?") : "", "$");
    return new RegExp(regexString, 'g');
};
exports.getNonGroupingNumberFormatRegex = getNonGroupingNumberFormatRegex;
var isValidLocalisedNumber = function (value, groupingSeparator, decimalSeparator, allowDecimals) {
    var _a, _b;
    var isValidWithGrouping = ((_a = "".concat(value).match((0, exports.getGroupingNumberFormatRegex)(groupingSeparator, decimalSeparator, allowDecimals))) === null || _a === void 0 ? void 0 : _a.length) > 0;
    var isValidWithoutGrouping = ((_b = "".concat(value).match((0, exports.getNonGroupingNumberFormatRegex)(decimalSeparator, allowDecimals))) === null || _b === void 0 ? void 0 : _b.length) > 0;
    return isValidWithGrouping || isValidWithoutGrouping;
};
exports.isValidLocalisedNumber = isValidLocalisedNumber;
var getDivider = function (divideValue) { return divideValue == 0 ? undefined : function (input, showDecimals) {
    if (typeof input !== 'number') {
        return input;
    }
    return showDecimals
        ? (input / divideValue)
        : Math.floor(input / divideValue);
}; };
exports.getDivider = getDivider;
exports.divideBy100 = (0, exports.getDivider)(100);
