"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdornmentPosition = void 0;
exports.AdornmentPosition = {
    start: 'start',
    end: 'end'
};
var styles = { userSelect: 'none' };
var usePriceFieldAdornment = function (variant) {
    var adornmentType = variant == exports.AdornmentPosition.end
        ? 'endAdornment'
        : 'startAdornment';
    var adornmentPosition = variant == exports.AdornmentPosition.end
        ? 'end'
        : 'start';
    return [adornmentType, adornmentPosition, styles];
};
exports.default = usePriceFieldAdornment;
