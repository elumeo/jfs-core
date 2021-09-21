"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Cancel = function (_a) {
    var onClick = _a.onClick;
    var intl = (0, react_intl_1.useIntl)();
    return (react_1.default.createElement(Button_1.default, { onClick: onClick, variant: 'outlined' }, intl.formatMessage({ id: 'app.cancel.action' })));
};
exports.default = Cancel;
