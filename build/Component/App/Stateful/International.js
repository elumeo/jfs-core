"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var useSelector_1 = __importDefault(require("../../../Store/useSelector"));
var International = function (_a) {
    var translations = _a.translations, children = _a.children;
    var locale = (0, useSelector_1.default)(function (state) { return state.Core.Language.language; });
    return (react_1.default.createElement(react_intl_1.IntlProvider, { locale: locale, messages: translations[locale] || {} }, children));
};
exports.default = International;
