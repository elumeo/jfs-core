"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Format = __importStar(require("../../../Utilities/Format"));
var useWords = function (toast) {
    var intl = (0, react_intl_1.useIntl)();
    var _a = react_1.default.useState([]), words = _a[0], setWords = _a[1];
    react_1.default.useEffect(function () {
        if (toast === null || toast === void 0 ? void 0 : toast.contentMessage) {
            var next = toast.contentMessage.split(' ');
            setWords(next);
        }
        else if (toast === null || toast === void 0 ? void 0 : toast.contentTranslationId) {
            var id = toast.contentTranslationId;
            var values = toast.contentTranslationValues || {};
            var next = intl.formatMessage({ id: id }, values).split(' ');
            setWords(next);
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.contentError) && (toast === null || toast === void 0 ? void 0 : toast.contentError) instanceof Error) {
            var _a = Format.Error.apply(toast.contentError), title = _a.title, details = _a.details;
            var next = __spreadArray(__spreadArray([], title.split(' '), true), details.split(' '), true);
            setWords(next);
        }
    }, [JSON.stringify(toast)]);
    return words;
};
exports.default = useWords;
