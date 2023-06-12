"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = { userSelect: 'none' };
var usePriceFieldAdornment = function (currency) {
    var adornmentType = currency.toLowerCase() === 'eur'
        ? 'endAdornment'
        : 'startAdornment';
    var adornmentPosition = currency.toLowerCase() === 'eur'
        ? 'end'
        : 'start';
    return [adornmentType, adornmentPosition, styles];
};
exports.default = usePriceFieldAdornment;
