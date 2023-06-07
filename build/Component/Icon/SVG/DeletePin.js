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
var DeletePin = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M1.2,0.8 L22.2,21.7 L20.9,23 L11.969,14.069 L11.97,21 L10.97,22 L9.97,21 L9.97,14 L4,14 L4,12 L4.17658619,11.9949189 C5.69558218,11.9072495 6.90724945,10.6955822 6.99491891,9.17658619 L6.997,9.096 L7.46069873e-14,2.1 L1.2,0.8 Z M16,2 C16.5107143,2 16.9352041,2.3880102 16.9932398,2.88380102 L17,3 L16.9932398,3.11619898 C16.9396684,3.57385204 16.573852,3.93966837 16.116199,3.9932398 L16,4 L15,4 L15,9 C15,10.6007143 16.2459949,11.9038776 17.8234138,11.9949189 L18,12 L18,14 L16.969,14 L7,4.078 L7,4 L6.922,4 L5.25152134,2.33862787 C5.41081232,2.15868075 5.63358014,2.03605027 5.88380102,2.0067602 L6,2 L16,2 Z' }) })) }))); };
exports.default = DeletePin;
