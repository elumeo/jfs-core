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
var PhoneBlock = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', d: 'M16,2 C23.728,2 30,8.272 30,16 C30,23.728 23.728,30 16,30 C8.272,30 2,23.728 2,16 C2,8.272 8.272,2 16,2 Z M13.0499358,20.9245525 L9.14,24.834 C11.03,26.318 13.41,27.2 16,27.2 C18.5284008,27.2 20.8604663,26.3632373 22.7345194,24.9513889 C19.0791732,24.6706739 15.7185422,23.1966378 13.0499358,20.9245525 Z M7.04880424,9.26583963 L7.02433459,9.29782556 C5.62717578,11.1663359 4.8,13.486125 4.8,16 C4.8,18.59 5.682,20.97 7.166,22.86 L7.166,22.86 L11.0752519,18.9500468 C8.80376876,16.2826111 7.32931759,12.9228824 7.04880424,9.26583963 Z M24.834,9.14 L14.8904228,19.0836137 C15.8334051,19.8686433 16.8544172,20.5312238 17.9,21.03 L17.9,21.03 L19.47,19.06 C19.74,18.79 20.13,18.7 20.48,18.82 C21.59,19.18 22.78,19.38 24.01,19.38 C24.55,19.38 25,19.83 25,20.37 L25,20.37 L25.0007468,22.6685005 C26.3827182,20.8058262 27.2,18.4987953 27.2,16 C27.2,13.41 26.318,11.03 24.834,9.14 L24.834,9.14 Z M16,4.8 C13.5007612,4.8 11.1933549,5.61757192 9.3305077,6.99998916 L11.65,7 C12.19,7 12.64,7.45 12.64,7.99 C12.64,9.22 12.83,10.41 13.2,11.52 C13.31,11.87 13.23,12.26 12.96,12.54 L12.96,12.54 L11.01,14.2 C11.5058363,15.2303548 12.1550141,16.2137178 12.9114376,17.1144298 L22.86,7.166 C20.97,5.682 18.59,4.8 16,4.8 Z' }) })) }))); };
exports.default = PhoneBlock;
