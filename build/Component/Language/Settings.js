"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var Select_1 = __importDefault(require("./Select"));
var useLanguage_1 = __importDefault(require("./useLanguage"));
var Settings = function () {
    var language = (0, useLanguage_1.default)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (react_1.default.createElement("div", { style: {
            width: 240,
        } },
        react_1.default.createElement(InputLabel_1.default, null, formatMessage({ id: 'settings.language' })),
        react_1.default.createElement(Select_1.default, { value: language.value, onChange: language.onChange })));
};
exports.default = Settings;
