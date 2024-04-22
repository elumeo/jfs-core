"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeItem = exports.setItem = exports.getItem = exports.BASE_NAME = void 0;
exports.BASE_NAME = 'jfs_';
var getItem = function (key) {
    return window.localStorage.getItem(exports.BASE_NAME + key);
};
exports.getItem = getItem;
var setItem = function (key, value) {
    window.localStorage.setItem(exports.BASE_NAME + key, value);
};
exports.setItem = setItem;
var removeItem = function (key) {
    window.localStorage.removeItem(exports.BASE_NAME + key);
};
exports.removeItem = removeItem;
