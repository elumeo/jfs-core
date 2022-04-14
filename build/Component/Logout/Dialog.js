"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var Button = __importStar(require("./Button"));
var useLogout_1 = __importDefault(require("./useLogout"));
var Text_1 = __importDefault(require("./Text"));
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Dialog = function (_a) {
    var children = _a.children, onLogout = _a.onLogout, _b = _a.pending, pending = _b === void 0 ? false : _b;
    var logout = (0, useLogout_1.default)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return (react_1.default.createElement(Dialog_1.default, { open: logout.open, onClose: logout.close, "aria-labelledby": 'logout-description', disableEscapeKeyDown: logout.pending === true },
        react_1.default.createElement(DialogTitle_1.default, null, formatMessage({ id: 'app.logout.title' })),
        react_1.default.createElement(DialogContent_1.default, { style: {
                minHeight: 80,
            } },
            react_1.default.createElement(Text_1.default, { override: children })),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button.Cancel, { onClick: logout.close }),
            react_1.default.createElement(Button.Submit, { pending: pending || logout.pending, onClick: function () { return (onLogout ? onLogout() : logout.commit({})); } }))));
};
exports.default = Dialog;
