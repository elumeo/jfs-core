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
var colors_1 = require("@mui/material/colors");
var Definition_1 = __importDefault(require("../../../App/Stateless/Style/Theme/Definition"));
var styles = {
    width: Definition_1.default.spacing(10),
    height: Definition_1.default.spacing(10),
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors_1.grey['100'],
    userSelect: 'none',
    cursor: 'pointer',
};
var NoProductImageAvailable = function (_a) {
    var _b = _a.onClick, onClick = _b === void 0 ? null : _b;
    return (0, jsx_runtime_1.jsx)(material_1.Box, __assign({ sx: styles, onClick: onClick }, { children: "No Image available" }));
};
exports.default = NoProductImageAvailable;
