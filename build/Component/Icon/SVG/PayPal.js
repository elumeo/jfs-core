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
var PayPal = function (props) { return ((0, jsx_runtime_1.jsxs)(Wrapper_1.default, __assign({}, props, { children: [(0, jsx_runtime_1.jsx)("title", { children: "paypal" }), (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M28.1341786,10.0413328 C26.7571427,16.2585528 22.5062666,19.5393516 15.806615,19.5393516 L13.5782979,19.5387892 L12.0281762,29.5462264 L10.1607308,29.5473045 L10.0633125,30.1917178 C10.0001796,30.619108 10.3229411,31 10.7431209,31 L15.5138071,31 C16.077672,31 16.557206,30.5836719 16.6491866,30.0156619 L16.6949004,29.7698586 L17.5946142,23.974451 L17.6517565,23.6578222 C17.7377463,23.0898123 18.2216121,22.6734841 18.787136,22.6734841 L19.4947321,22.6734841 C24.1135766,22.6734841 27.7319709,20.7634464 28.792236,15.243794 C29.1906189,13.1455133 29.0393302,11.3650332 28.1357915,10.0413328 L28.1341786,10.0413328 L28.1341786,10.0413328 Z M25.2826424,3.26158707 C23.916528,1.6793339 21.4470614,1 18.2896298,1 L9.12498159,1 C8.47945856,1 7.9264691,1.47449783 7.82905079,2.12556717 L4.00973692,26.7437221 C3.9346686,27.2292352 4.30314391,27.6699374 4.78806959,27.6699374 L10.450313,27.6699374 L11.8736157,18.5002187 L11.8279019,18.7869892 C11.9253202,18.1364824 12.4728719,17.6614689 13.117842,17.6614689 L15.8066611,17.662547 C21.0895076,17.662547 25.2239333,15.4840193 26.4349802,9.16770934 C26.4698186,8.979982 26.5029979,8.79839506 26.5269608,8.62182356 C26.8840077,6.28987975 26.5269608,4.6965645 25.2827345,3.26214954 L25.2827345,3.26158707 L25.2826424,3.26158707 Z' }) }))] }))); };
exports.default = PayPal;
