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
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Footer = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)(material_1.TableFooter, __assign({ ref: ref }, { children: (0, jsx_runtime_1.jsx)(material_1.TableRow, __assign({ sx: { background: 'white' } }, { children: (0, jsx_runtime_1.jsx)(material_1.TableCell, __assign({ colSpan: 100, align: 'center' }, { children: children })) })) }));
});
exports.default = Footer;
