"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Severity = void 0;
var react_1 = __importDefault(require("react"));
exports.Severity = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info',
};
var useSeverity = function (toast) {
    return react_1.default.useMemo(function () {
        if ((toast === null || toast === void 0 ? void 0 : toast.isSuccess) || (toast === null || toast === void 0 ? void 0 : toast.variant) == 'success') {
            return exports.Severity.success;
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.isError) || (toast === null || toast === void 0 ? void 0 : toast.variant) == 'error') {
            return exports.Severity.error;
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.isWarning) || (toast === null || toast === void 0 ? void 0 : toast.variant) == 'warning') {
            return exports.Severity.warning;
        }
        else if (toast) {
            return exports.Severity.info;
        }
        return null;
    }, [toast]);
};
exports.default = useSeverity;
