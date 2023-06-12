"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Severity = void 0;
var react_1 = __importDefault(require("react"));
exports.Severity = {
    success: 'success',
    error: 'error',
    info: 'info',
};
var useSeverity = function (toast) {
    var color = react_1.default.useMemo(function () {
        if (toast && toast.isSuccess) {
            return exports.Severity.success;
        }
        else if (toast && toast.isError) {
            return exports.Severity.error;
        }
        else if (toast) {
            return exports.Severity.info;
        }
        return null;
    }, [toast]);
    return color;
};
exports.default = useSeverity;
