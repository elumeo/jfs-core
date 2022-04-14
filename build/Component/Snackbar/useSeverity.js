"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useSeverity = function (toast) {
    var _a = react_1.default.useState('info'), severity = _a[0], setSeverity = _a[1];
    react_1.default.useEffect(function () {
        if (toast && toast.isSuccess) {
            setSeverity('success');
        }
        else if (toast && toast.isError) {
            setSeverity('error');
        }
        else if (toast) {
            setSeverity('info');
        }
    }, [!!toast, toast === null || toast === void 0 ? void 0 : toast.isSuccess, toast === null || toast === void 0 ? void 0 : toast.isError]);
    return severity;
};
exports.default = useSeverity;
