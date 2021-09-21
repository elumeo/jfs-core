"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
var lab_1 = require("@material-ui/lab");
var useActions_1 = __importDefault(require("../../Store/useActions"));
var useVisibleToast_1 = __importDefault(require("./useVisibleToast"));
var Snackbar = function () {
    var dismissToastAction = (0, useActions_1.default)().dismissToastAction;
    var _a = (0, useVisibleToast_1.default)(), open = _a.open, severity = _a.severity, message = _a.message, autoHideDuration = _a.autoHideDuration;
    return (react_1.default.createElement(Snackbar_1.default, { open: open, id: 'alert-snackbar', onClose: function (_, reason) {
            if (reason === 'timeout') {
                dismissToastAction();
            }
        }, autoHideDuration: autoHideDuration },
        react_1.default.createElement(lab_1.Alert, { severity: severity, variant: 'filled' }, message)));
};
exports.default = Snackbar;
