"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Failure = function (_a) {
    var title = _a.title, details = _a.details;
    var intl = (0, react_intl_1.useIntl)();
    return (react_1.default.createElement("span", null,
        react_1.default.createElement("u", null,
            intl.formatMessage({ id: 'app.error' }),
            ":\u00A0"),
        details,
        react_1.default.createElement("br", null),
        title && react_1.default.createElement("span", { style: { fontSize: 'x-small' } }, title)));
};
exports.default = Failure;
