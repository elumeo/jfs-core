"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAllNonNumericOrSeperatorRegex = exports.intlDecSeparator = exports.intlThousandsSeperator = exports.getCurrency = exports.formatDisplay = exports.getCurrencySign = void 0;
var Locale = __importStar(require("./Locale"));
var getCurrencySign = function (currency) {
    return new Intl.NumberFormat(Locale.locale, { style: 'currency', currency: currency })
        .formatToParts(0)
        .reduce(function (sign, _a) {
        var type = _a.type, value = _a.value;
        return sign + (type === 'currency' ? value : '');
    }, '');
};
exports.getCurrencySign = getCurrencySign;
var formatDisplay = function (value, min, max) {
    var val = parseFloat("".concat(value).replace(exports.replaceAllNonNumericOrSeperatorRegex, ''));
    if ((!!min || min === 0) && val < min) {
        return min.toString();
    }
    else if (max && val > max) {
        return max.toString();
    }
    return val.toFixed(2);
};
exports.formatDisplay = formatDisplay;
var getCurrency = function (currency, value, showFraction, withCurrencySign, withZeroDecimals) {
    if (showFraction === void 0) { showFraction = false; }
    if (withCurrencySign === void 0) { withCurrencySign = true; }
    if (withZeroDecimals === void 0) { withZeroDecimals = false; }
    var options = {
        style: withCurrencySign ? 'currency' : 'decimal',
        currency: currency,
        maximumFractionDigits: showFraction ? 2 : 0,
        minimumFractionDigits: showFraction && ((value % 1 !== 0) || withZeroDecimals) ? 2 : 0,
    };
    return new Intl.NumberFormat(Locale.locale, options).format(value);
};
exports.getCurrency = getCurrency;
exports.intlThousandsSeperator = new Intl.NumberFormat(Locale.locale)
    .format(1111)
    .replace(/1/g, '');
exports.intlDecSeparator = new Intl.NumberFormat(Locale.locale)
    .format(1.1)
    .replace(/1/g, '');
exports.replaceAllNonNumericOrSeperatorRegex = /[^0-9.,-]/;
