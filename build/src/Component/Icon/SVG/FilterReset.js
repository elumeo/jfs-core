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
var FilterReset = function (props) { return (react_1.default.createElement(Wrapper_1.default, __assign({}, props),
    react_1.default.createElement("g", { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
        react_1.default.createElement("g", { transform: 'translate(1.000000, 0.000000)', fill: 'currentcolor', fillRule: 'nonzero' },
            react_1.default.createElement("path", { d: 'M9,18 L13,18 L13,16 L9,16 L9,18 Z M0,2.1 L20.9,23 L22.2,21.7 L1.2,0.8 L0,2.1 Z M2,6 L2,8 L6,8 L6,6 L2,6 Z M9,6 L11,8 L20,8 L20,6 L9,6 Z M5,13 L11,13 L11,11 L5,11 L5,13 Z M16,13 L17,13 L17,11 L14,11 L16,13 Z' }))))); };
exports.default = FilterReset;
