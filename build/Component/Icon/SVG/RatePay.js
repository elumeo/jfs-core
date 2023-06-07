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
var RatePay = function (props) { return ((0, jsx_runtime_1.jsxs)(Wrapper_1.default, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)("title", { children: "ratepay" }), (0, jsx_runtime_1.jsxs)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: [(0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M22.466371,3.09470916 C20.2114754,1.75191091 17.5923509,0.978605911 14.7906748,1.00045068 C8.82331236,1.06926172 3.72126666,4.66491151 1.46637103,9.78554496 L8.82331236,17 L22.466371,3.09470916 Z' }), (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M29.1577668,10 L29.1577668,10 L9.46637103,29.8244708 L9.46637103,29.8244708 C11.3116336,30.5849251 13.3438888,31 15.4694161,31 C23.8325138,30.9077366 30.5364448,24.1769305 30.4658181,15.9247732 C30.4425001,13.8033778 29.9752428,11.7979202 29.1577668,10 Z' })] }))] }))); };
exports.default = RatePay;
