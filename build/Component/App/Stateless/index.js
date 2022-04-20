"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Style_1 = __importDefault(require("./Style"));
var Picker_1 = __importDefault(require("./Picker"));
var Stateless = function (_a) {
    var locale = _a.locale, messages = _a.messages, children = _a.children;
    return react_1.default.createElement(react_intl_1.IntlProvider, { locale: locale, messages: messages },
        react_1.default.createElement(Style_1.default, null,
            react_1.default.createElement(Picker_1.default, null, children)));
};
Stateless.Style = Style_1.default;
exports.default = Stateless;
