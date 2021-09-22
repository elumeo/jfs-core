"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var ButtonProgress_1 = __importDefault(require("../../../../Component/Button/ButtonProgress"));
var Submit = function (_a) {
    var pending = _a.pending, onClick = _a.onClick;
    var intl = (0, react_intl_1.useIntl)();
    return (react_1.default.createElement(ButtonProgress_1.default, { inProgress: pending, onClick: onClick, color: 'primary', variant: 'contained' }, intl.formatMessage({ id: 'app.logout.action' })));
};
exports.default = Submit;
