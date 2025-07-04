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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var locales_1 = require("@mui/x-date-pickers/locales");
var de_1 = __importDefault(require("date-fns/locale/de"));
var en_GB_1 = __importDefault(require("date-fns/locale/en-GB"));
var it_1 = __importDefault(require("date-fns/locale/it"));
var es_1 = __importDefault(require("date-fns/locale/es"));
var pl_1 = __importDefault(require("date-fns/locale/pl"));
var adapterLocales = { de: de_1.default, en: en_GB_1.default, it: it_1.default, es: es_1.default, pl: pl_1.default };
var textLocales = { de: locales_1.deDE, en: locales_1.enUS, it: locales_1.itIT, es: locales_1.esES, pl: locales_1.plPL };
var Picker = function (_a) {
    var children = _a.children, locale = _a.locale;
    return (0, jsx_runtime_1.jsx)(LocalizationProvider_1.LocalizationProvider, __assign({ dateAdapter: AdapterDateFns_1.AdapterDateFns, adapterLocale: adapterLocales[locale], localeText: textLocales[locale].components.MuiLocalizationProvider.defaultProps.localeText }, { children: children }));
};
exports.default = Picker;
