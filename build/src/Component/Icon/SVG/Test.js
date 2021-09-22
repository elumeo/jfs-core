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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Wrapper_1 = __importDefault(require("../Wrapper"));
var Test = function (props) { return (react_1.default.createElement(Wrapper_1.default, __assign({}, props),
    react_1.default.createElement("title", null, "test"),
    react_1.default.createElement("g", { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        react_1.default.createElement("circle", { fill: 'currentcolor', cx: '16.5', cy: '15.5', r: '10.5' })))); };
exports.default = Test;
