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
var Refresh_1 = __importDefault(require("@mui/icons-material/Refresh"));
var IconButtonProgress_1 = __importDefault(require("./IconButtonProgress"));
var RefreshButton = function (props) { return (0, jsx_runtime_1.jsx)(IconButtonProgress_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsx)(Refresh_1.default, {}) })); };
exports.default = RefreshButton;
