"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useError = function (value) {
    var initial = react_1.default.useRef(true);
    var _a = react_1.default.useState(false), error = _a[0], setError = _a[1];
    react_1.default.useEffect(function () {
        setError(!initial.current && value === '');
        initial.current = false;
    }, [value]);
    return error;
};
exports.default = useError;
