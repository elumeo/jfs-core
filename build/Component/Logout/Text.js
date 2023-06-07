"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_intl_1 = require("react-intl");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Text = function (_a) {
    var override = _a.override;
    var intl = (0, react_intl_1.useIntl)();
    return ((0, jsx_runtime_1.jsx)(Typography_1.default, { children: override ? override : intl.formatMessage({ id: 'app.logout.message' }) }));
};
exports.default = Text;
