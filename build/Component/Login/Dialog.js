"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var Credentials_1 = __importDefault(require("./Credentials"));
var Submit_1 = __importDefault(require("./Submit"));
var useLogin_1 = __importDefault(require("./useLogin"));
var react_intl_1 = require("react-intl");
var Dialog = function () {
    var login = (0, useLogin_1.default)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (react_1.default.createElement(Dialog_1.default, { open: login.open, style: { marginBottom: '32vh' } },
        react_1.default.createElement(DialogTitle_1.default, null, formatMessage({ id: 'app.login' })),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(Credentials_1.default, { value: login.credentials, onChange: login.onChange, onSubmit: login.check })),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Submit_1.default, { onClick: login.check, disabled: login.credentials.username === '' ||
                    login.credentials.password === '' }))));
};
exports.default = Dialog;
