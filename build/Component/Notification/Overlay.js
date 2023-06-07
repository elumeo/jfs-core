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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var History = __importStar(require("./History"));
var Overlay = function () { return ((0, jsx_runtime_1.jsxs)(Card_1.default, __assign({ sx: {
        width: 400,
        height: 'calc(100vh - 100px)',
    } }, { children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { sx: { height: 70 }, action: (0, jsx_runtime_1.jsx)(History.Toolbar, {}) }), (0, jsx_runtime_1.jsx)(CardContent_1.default, __assign({ sx: {
                width: '100%',
                height: 'calc(100% - 70px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0
            } }, { children: (0, jsx_runtime_1.jsx)(History.All, {}) }))] }))); };
exports.default = Overlay;
