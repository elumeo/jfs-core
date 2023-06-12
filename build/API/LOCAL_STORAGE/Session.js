"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.setItem = exports.getItem = void 0;
var BASE_NAME = 'jfs_';
var getItem = function (key) {
    return window.localStorage.getItem(BASE_NAME + key);
};
exports.getItem = getItem;
var setItem = function (key, value) {
    window.localStorage.setItem(BASE_NAME + key, value);
};
exports.setItem = setItem;
var removeItem = function (key) {
    window.localStorage.removeItem(BASE_NAME + key);
};
exports.removeItem = removeItem;
