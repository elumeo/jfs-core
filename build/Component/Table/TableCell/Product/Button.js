"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var styles = {
    textTransform: 'initial',
    width: 'fit-content',
    p: .5,
    lineHeight: 1
};
var Button = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, onClick = _a.onClick;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (id && react_1.default.createElement(material_1.Button, { color: 'secondary', onClick: onClick, sx: styles }, formatMessage({ id: 'product.details' })));
};
exports.default = Button;
