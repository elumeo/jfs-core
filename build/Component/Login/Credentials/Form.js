"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
    return (react_1.default.createElement("form", { autoCorrect: 'false', autoComplete: 'off', style: style }, children));
};
exports.default = Form;
