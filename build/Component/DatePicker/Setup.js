"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_datepicker_1 = require("react-datepicker");
var de_1 = __importDefault(require("date-fns/locale/de"));
var en_GB_1 = __importDefault(require("date-fns/locale/en-GB"));
var it_1 = __importDefault(require("date-fns/locale/it"));
(0, react_datepicker_1.registerLocale)('de', de_1.default);
(0, react_datepicker_1.registerLocale)('en', en_GB_1.default);
(0, react_datepicker_1.registerLocale)('it', it_1.default);
