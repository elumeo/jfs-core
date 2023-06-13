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
var BidBlock = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M16,2 C23.728,2 30,8.272 30,16 C30,23.728 23.728,30 16,30 C8.272,30 2,23.728 2,16 C2,8.272 8.272,2 16,2 Z M24.834,9.14 L17.953,16.02 L23.4666667,21.6472767 L21.3648097,23.7922658 L15.829,18.143 L11.111,22.862 L16.5663292,22.8627451 L16.5663292,24.4 L9.573,24.4 L9.14,24.834 C10.94,26.2473333 13.1844444,27.1146349 15.6314588,27.1940302 L16,27.2 C22.188,27.2 27.2,22.188 27.2,16 C27.2,13.41 26.318,11.03 24.834,9.14 L24.834,9.14 Z M16,4.8 C9.812,4.8 4.8,9.812 4.8,16 C4.8,18.59 5.682,20.97 7.166,22.86 L7.166,22.86 L10.669,19.357 L7.6,16.2508715 L9.73697512,14.0700436 L12.801,17.224 L13.876,16.15 L10.78753,12.9979303 L12.889387,10.8529412 L15.999,14.026 L17.073,12.953 L13.9391947,9.78082789 L16.0761698,7.6 L19.205,10.82 L22.86,7.166 C21.06,5.75266667 18.8155556,4.88536508 16.3685412,4.80596977 Z' }) })) }))); };
exports.default = BidBlock;
