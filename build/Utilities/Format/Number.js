"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupingSeparator = exports.getDecimalSeparator = exports.divideBy100 = exports.getDivider = exports.isValidLocalisedNumber = exports.getNonGroupingNumberFormatRegex = exports.getGroupingNumberFormatRegex = exports.limit = void 0;
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
var getDecimalSeparator = function (locale) {
    return (1.1).toLocaleString(locale).substring(1, 2);
};
exports.getDecimalSeparator = getDecimalSeparator;
var getGroupingSeparator = function (locale) {
    return (1000).toLocaleString(locale).substring(1, 2);
};
exports.getGroupingSeparator = getGroupingSeparator;
