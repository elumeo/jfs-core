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
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    height: 110,
    width: 240,
    marginTop: 6,
    marginBottom: 32,
    gap: Definition_1.default.spacing(1),
};
var Form = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("form", __assign({ autoCorrect: 'false', autoComplete: 'off', style: style }, { children: children })));
};
exports.default = Form;
