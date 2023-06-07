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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Failure_1 = __importDefault(require("./Failure"));
var Format = __importStar(require("../../Utilities/Format"));
var useMessage = function (toast, words) {
    var _a = react_1.default.useState(''), message = _a[0], setMessage = _a[1];
    react_1.default.useEffect(function () {
        if ((toast === null || toast === void 0 ? void 0 : toast.contentMessage) || (toast === null || toast === void 0 ? void 0 : toast.contentTranslationId)) {
            setMessage(words.join(' '));
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.contentError) && (toast === null || toast === void 0 ? void 0 : toast.contentError) instanceof Error) {
            var _a = Format.Error.apply(toast.contentError), title = _a.title, details = _a.details;
            setMessage((0, jsx_runtime_1.jsx)(Failure_1.default, { title: title, details: details }));
        }
    }, [toast === null || toast === void 0 ? void 0 : toast.contentMessage, toast === null || toast === void 0 ? void 0 : toast.contentTranslationId, toast === null || toast === void 0 ? void 0 : toast.contentError, words]);
    return message;
};
exports.default = useMessage;
