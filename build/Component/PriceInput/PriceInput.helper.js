"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleString = exports.toLocaleStringFractionOptions = exports.sanitize = void 0;
var sanitize = function (value, decimalSeparator) {
    var returnValue = value;
    if (!returnValue || returnValue == 'null') {
        return null;
    }
    // @INFO: assumptions is, that the user always wants to input euros
    if (!returnValue.includes(decimalSeparator) || returnValue[returnValue.length - 1] === decimalSeparator) {
        if (!returnValue.includes(decimalSeparator)) {
            returnValue = "".concat(value).concat(decimalSeparator, "0");
        }
        else {
            returnValue = "".concat(value, "0");
        }
    }
    // @INFO: bspw: 12.1, 23,5 => 12.10, 23,50
    if ((returnValue === null || returnValue === void 0 ? void 0 : returnValue[returnValue.length - 2]) === decimalSeparator) {
        returnValue = "".concat(returnValue, "0");
    }
    return returnValue.replace(/[^\d-]|(?<=\d)-/g, '');
};
exports.sanitize = sanitize;
var toLocaleStringFractionOptions = function (fraction) {
    if (fraction === void 0) { fraction = 2; }
    return ({ minimumFractionDigits: fraction, maximumFractionDigits: fraction });
};
exports.toLocaleStringFractionOptions = toLocaleStringFractionOptions;
var getLocaleString = function (locale, input, grouping, showDecimals) {
    if (grouping === void 0) { grouping = true; }
    if (showDecimals === void 0) { showDecimals = true; }
    return (input !== null && input !== void 0 ? input : '')
        .toLocaleString(locale, __assign({ style: 'decimal', useGrouping: grouping }, (0, exports.toLocaleStringFractionOptions)(showDecimals ? 2 : 0)));
};
exports.getLocaleString = getLocaleString;
