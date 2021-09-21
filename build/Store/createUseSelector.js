"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var createUseSelector = function () { return function (selector) {
    return (0, react_redux_1.useSelector)(selector);
}; };
exports.default = createUseSelector;
