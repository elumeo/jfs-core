"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
var Progress = function () { return (react_1.default.createElement(Box_1.default, { style: style },
    react_1.default.createElement(CircularProgress_1.default, null))); };
exports.default = Progress;
