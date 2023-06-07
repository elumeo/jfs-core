"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../Types/Redux");
var useWords_1 = __importDefault(require("./useWords"));
var useSeverity_1 = __importDefault(require("./useSeverity"));
var useAutoHideDuration_1 = __importDefault(require("./useAutoHideDuration"));
var useMessage_1 = __importDefault(require("./useMessage"));
var useVisibleToast = function () {
    var toasts = (0, Redux_1.useSelector)(function (state) { return state.Core.Toast.toasts; });
    var toast = react_1.default.useMemo(function () { return toasts === null || toasts === void 0 ? void 0 : toasts[0]; }, [toasts]);
    var open = Boolean(toast);
    var words = (0, useWords_1.default)(toast);
    var message = (0, useMessage_1.default)(toast, words);
    var autoHideDuration = (0, useAutoHideDuration_1.default)(words);
    var severity = (0, useSeverity_1.default)(toast);
    return ({
        toast: toast,
        open: open,
        words: words,
        message: message,
        autoHideDuration: autoHideDuration,
        severity: severity,
    });
};
exports.default = useVisibleToast;
