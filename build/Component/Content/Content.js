"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var react_1 = __importDefault(require("react"));
var Content = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Box_1.default, { width: '100%' }, children));
};
exports.default = Content;
