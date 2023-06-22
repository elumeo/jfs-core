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
exports.getDefaultTimeFormat = exports.getDefaultDateFormat = exports.getDefaultDateTimeFormatOptions = exports.getDefaultDateFormatOptions = exports.getDefaultTimeFormatOptions = void 0;
var getDefaultTimeFormatOptions = function (withSeconds) {
    if (withSeconds === void 0) { withSeconds = false; }
    return withSeconds === false
        ? { hour: '2-digit', minute: '2-digit' }
        : { hour: '2-digit', minute: '2-digit', second: '2-digit' };
};
exports.getDefaultTimeFormatOptions = getDefaultTimeFormatOptions;
var getDefaultDateFormatOptions = function () { return ({ year: 'numeric', month: '2-digit', day: '2-digit' }); };
exports.getDefaultDateFormatOptions = getDefaultDateFormatOptions;
var getDefaultDateTimeFormatOptions = function (withSeconds) {
    if (withSeconds === void 0) { withSeconds = false; }
    return (__assign(__assign({}, (0, exports.getDefaultDateFormatOptions)()), (0, exports.getDefaultTimeFormatOptions)(withSeconds)));
};
exports.getDefaultDateTimeFormatOptions = getDefaultDateTimeFormatOptions;
var getDefaultDateFormat = function () { return 'DD.MM.YYYY'; };
exports.getDefaultDateFormat = getDefaultDateFormat;
var getDefaultTimeFormat = function () { return 'HH:mm'; };
exports.getDefaultTimeFormat = getDefaultTimeFormat;
