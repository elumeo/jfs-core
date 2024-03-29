"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useAutoFocus = function (input) {
    react_1.default.useEffect(function () {
        input.current.focus();
    }, [input]);
};
exports.default = useAutoFocus;
