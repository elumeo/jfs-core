"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var Theme_1 = __importDefault(require("./Theme"));
var Style = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(Theme_1.default, null,
        react_1.default.createElement(core_1.CssBaseline, null),
        children));
};
exports.default = Style;
