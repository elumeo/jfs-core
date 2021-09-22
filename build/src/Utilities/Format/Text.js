"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDiacritics = exports.endsWith = exports.beginsWith = exports.capitalize = void 0;
var diacritics_1 = require("diacritics");
var capitalize = function (value) {
    return "" + value[0].toUpperCase() + value.slice(1);
};
exports.capitalize = capitalize;
var beginsWith = function (text) {
    var prefixes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        prefixes[_i - 1] = arguments[_i];
    }
    return prefixes.some(function (prefix) { return text.substring(0, prefix.length) === prefix; });
};
exports.beginsWith = beginsWith;
var endsWith = function (text) {
    var suffixes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        suffixes[_i - 1] = arguments[_i];
    }
    return suffixes.some(function (suffix) { return text.substring(text.length - suffix.length) === suffix; });
};
exports.endsWith = endsWith;
var removeDiacritics = function (text) {
    return (0, diacritics_1.remove)(Array.from(text
        .toLowerCase()
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .normalize('NFD'))
        .filter(function (character) {
        return (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) ||
            (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122);
    })
        .join(''));
};
exports.removeDiacritics = removeDiacritics;
