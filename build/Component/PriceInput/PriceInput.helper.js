"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitize = void 0;
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
