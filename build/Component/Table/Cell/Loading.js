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
var material_1 = require("@mui/material");
var Root_1 = __importDefault(require("./Root"));
var Loading = function (props) {
    var paddingY = (props === null || props === void 0 ? void 0 : props.size) === 'small' ? 6 : 16;
    var paddingX = 16;
    return (0, jsx_runtime_1.jsx)(Root_1.default, __assign({}, props, { sx: { position: 'relative' }, size: 'medium' }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ position: 'absolute', top: paddingY, bottom: paddingY, right: paddingX, left: paddingX }, { children: (0, jsx_runtime_1.jsx)(material_1.Skeleton, { variant: "rectangular", width: '100%', height: '100%', animation: 'wave' }) })) }));
};
exports.default = Loading;
