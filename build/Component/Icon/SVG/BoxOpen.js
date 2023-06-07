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
var jsx_runtime_1 = require("react/jsx-runtime");
var Wrapper_1 = __importDefault(require("../Wrapper"));
var BoxOpen = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("g", __assign({ transform: 'translate(1.000000, 1.000000)', fill: 'currentcolor', fillRule: 'nonzero' }, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M6.09346154,12.0564 L15,17.7756 L8.83384615,23.1192 L0,17.1384 L6.09346154,12.0564 Z M23.8707692,22.4628 L23.8707692,24.4872 L15.0369231,29.9808 L15.0369231,30 L15.0184615,29.9808 L15,30 L15,29.9808 L6.18346154,24.4872 L6.18346154,22.4628 L8.83384615,24.2628 L15,18.9372 L15,18.9 L15.0184615,18.9192 L15.0369231,18.9 L15.0369231,18.9372 L21.2203846,24.2628 L23.8707692,22.4628 Z M8.83384615,1.0128 L15,6.3564 L6.09346154,12.0564 L8.8817842e-16,6.9936 L8.83384615,1.0128 Z M23.9065385,12.0564 L30,17.1372 L21.1834615,23.118 L15,17.7744 L23.9065385,12.0564 Z M21.1834615,1.0128 L30,6.9936 L23.9065385,12.0564 L15,6.3564 L21.1834615,1.0128 Z' }) })) })) }))); };
exports.default = BoxOpen;
