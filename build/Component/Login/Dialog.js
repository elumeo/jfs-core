"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Credentials_1 = __importDefault(require("./Credentials"));
var Submit_1 = __importDefault(require("./Submit"));
var useLogin_1 = __importDefault(require("./useLogin"));
var react_intl_1 = require("react-intl");
var sx = {
    marginBottom: '32vh'
};
var Dialog = function () {
    var _a = (0, useLogin_1.default)(), open = _a.open, credentials = _a.credentials, onChange = _a.onChange, check = _a.check;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (react_1.default.createElement(Dialog_1.default, { open: open, sx: sx },
        react_1.default.createElement(DialogTitle_1.default, null, formatMessage({ id: 'app.login' })),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(Credentials_1.default, { value: credentials, onChange: onChange, onSubmit: check })),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Submit_1.default, { onClick: check, disabled: !credentials.username ||
                    !credentials.password }))));
};
exports.default = Dialog;
