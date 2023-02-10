"use strict";
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
var React = __importStar(require("react"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var classes = {
    root: {
        gridRowStart: 2,
        gridColumnStart: 1,
        gridColumnEnd: 'none'
    },
    typoSx: {
        wordBreak: 'break-word'
    }
};
var Content = function (_a) {
    var children = _a.children;
    return (!children
        ? null :
        React.createElement(CardContent_1.default, { sx: classes.root },
            React.createElement(Typography_1.default, { variant: 'body2', component: 'div', sx: classes.typoSx }, children)));
};
exports.default = Content;
