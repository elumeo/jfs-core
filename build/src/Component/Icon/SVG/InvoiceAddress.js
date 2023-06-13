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
var InvoiceAddress = function (props) { return ((0, jsx_runtime_1.jsx)(Wrapper_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)("g", __assign({ id: 'invoice_address', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' }, { children: (0, jsx_runtime_1.jsx)("path", { fill: 'currentcolor', fillRule: 'nonzero', d: 'M16,0 C21.523,0 26,4.477 26,10 C26,20 16,32 16,32 C16,32 6,20 6,10 C6,4.477 10.477,0 16,0 Z M17.2071,4 C15.9821974,4 14.8809649,4.37506944 13.9034025,5.12520831 C12.9258401,5.87534718 12.2394396,6.83368515 11.844201,8.0002222 L11.844201,8.0002222 L9.62193195,8.0002222 L9,9.34407288 L11.547772,9.34407288 C11.527968,9.46894789 11.5180659,9.68759027 11.5180659,10 L11.5188911,10.1483909 C11.5216417,10.3826859 11.5312687,10.5518646 11.547772,10.6559271 L11.547772,10.6559271 L9.62193195,10.6559271 L9,11.9997778 L11.844201,11.9997778 C12.2390182,13.1663149 12.9254187,14.1246528 13.9034025,14.8747917 C14.8813863,15.6249306 15.9826188,16 17.2071,16 C18.6688086,16 19.9328979,15.4896123 20.999368,14.4688368 L20.999368,14.4688368 L19.8736964,13.2816354 C19.1034446,13.9900011 18.2145792,14.344184 17.2071,14.344184 L17.2071,14.344184 C16.5166965,14.3415176 15.8155483,14.112432 15.1042874,13.6542606 C14.3930264,13.1960893 13.8793848,12.6441506 13.5633625,11.9984446 L13.5633625,11.9984446 L17.207732,11.9984446 L17.829664,10.6545939 L13.1487412,10.6545939 C13.109133,10.3630708 13.089329,10.1444284 13.089329,9.99866681 C13.089329,9.85290523 13.109133,9.63426286 13.1487412,9.3427397 L13.1487412,9.3427397 L17.207732,9.3427397 L17.829664,7.99888901 L13.5633625,7.99888901 C13.8798062,7.35318298 14.3934478,6.80124431 15.1042874,6.34307299 C15.8151269,5.88490168 16.5162752,5.65581602 17.207732,5.65581602 C18.2152112,5.65581602 19.1040767,6.00999889 19.8743285,6.71836463 L19.8743285,6.71836463 L21,5.5311632 C20.5655746,5.11476503 19.9729274,4.75547161 19.2220584,4.45328297 C18.4711893,4.15109432 17.7995365,4 17.2071,4 Z' }) })) }))); };
exports.default = InvoiceAddress;
