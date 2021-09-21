"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var DismissButton = function (_a) {
    var onClick = _a.onClick;
    return (react_1.default.createElement(IconButton_1.default, { color: 'inherit', onClick: onClick },
        react_1.default.createElement(Close_1.default, null)));
};
exports.default = DismissButton;
