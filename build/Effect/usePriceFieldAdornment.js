"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePriceFieldAdornment = function (currency) {
    var adornmentType = (0, react_1.useMemo)(function () { return currency.toLowerCase() === 'eur' ? 'endAdornment' : 'startAdornment'; }, [currency]);
    var adornmentPosition = (0, react_1.useMemo)(function () { return currency.toLowerCase() === 'eur' ? 'end' : 'start'; }, [currency]);
    var styles = (0, react_1.useMemo)(function () { return ({ userSelect: 'none' }); }, []);
    return [adornmentType, adornmentPosition, styles];
};
exports.default = usePriceFieldAdornment;
