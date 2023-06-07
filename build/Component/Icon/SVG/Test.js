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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var Wrapper_1 = __importDefault(require("../Wrapper"));
var Test = function (props) { return ((0, jsx_runtime_1.jsxs)(Wrapper_1.default, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)("title", { children: "test" }), (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("circle", { fill: 'currentcolor', cx: '16.5', cy: '15.5', r: '10.5' }) }))] }))); };
exports.default = Test;
