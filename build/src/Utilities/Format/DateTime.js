"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultTimeFormat = exports.getDefaultDateFormat = exports.getDefaultDateFormatOptions = exports.getDefaultTimeFormatOptions = void 0;
var getDefaultTimeFormatOptions = function (withSeconds) {
    if (withSeconds === void 0) { withSeconds = false; }
    return withSeconds === false
        ? { hour: '2-digit', minute: '2-digit' }
        : { hour: '2-digit', minute: '2-digit', second: '2-digit' };
};
exports.getDefaultTimeFormatOptions = getDefaultTimeFormatOptions;
var getDefaultDateFormatOptions = function () { return ({ year: 'numeric', month: '2-digit', day: '2-digit' }); };
exports.getDefaultDateFormatOptions = getDefaultDateFormatOptions;
var getDefaultDateFormat = function () { return 'DD.MM.YYYY'; };
exports.getDefaultDateFormat = getDefaultDateFormat;
var getDefaultTimeFormat = function () { return 'HH:mm'; };
exports.getDefaultTimeFormat = getDefaultTimeFormat;
