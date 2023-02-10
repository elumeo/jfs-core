"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Failure = function (_a) {
    var title = _a.title, details = _a.details;
    var intl = (0, react_intl_1.useIntl)();
    return (react_1.default.createElement(system_1.Stack, null,
        react_1.default.createElement(material_1.Typography, { component: 'u' },
            intl.formatMessage({ id: 'app.error' }),
            ":"),
        details,
        title && react_1.default.createElement(material_1.Typography, { sx: { fontSize: 'x-small' } }, title)));
};
exports.default = Failure;
