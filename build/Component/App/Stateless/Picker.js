"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var de_1 = __importDefault(require("date-fns/locale/de"));
var en_GB_1 = __importDefault(require("date-fns/locale/en-GB"));
var it_1 = __importDefault(require("date-fns/locale/it"));
var locales = { de: de_1.default, en: en_GB_1.default, it: it_1.default };
var Picker = function (_a) {
    var children = _a.children, locale = _a.locale;
    return react_1.default.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns, adapterLocale: locales[locale] }, children);
};
exports.default = Picker;
