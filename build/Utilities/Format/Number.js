"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.limit = void 0;
var Currency_1 = require("./Currency");
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
var parse = function (number, min, max, numberOfDecimals) {
    if (numberOfDecimals === void 0) { numberOfDecimals = 2; }
    var floatable = number.replace(Currency_1.matchAllNonNumericOrSeperatorRegex, '')
        .replace(Currency_1.matchComma, '.')
        .replace(Currency_1.matchFirstPoint, '');
    var santized = floatable.length === 0
        || floatable.endsWith('.')
        || (floatable.length === 1 && floatable.startsWith('-'))
        ? floatable
        : (+(0, exports.limit)((parseFloat(floatable)), min, max).toFixed(numberOfDecimals)).toString();
    return santized;
};
exports.parse = parse;
