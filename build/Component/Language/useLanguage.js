"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Redux_1 = require("../../Types/Redux");
var react_1 = require("react");
var useActions_1 = __importDefault(require("../../Store/useActions"));
var useLanguage = function () {
    var language = (0, Redux_1.useSelector)(function (state) {
        return state.Core.Language.language || state.Core.Configuration.config.Language;
    });
    var changeLanguageAction = (0, useActions_1.default)().changeLanguageAction;
    var onChange = (0, react_1.useCallback)(function (next) { return changeLanguageAction(next); }, [
        changeLanguageAction,
    ]);
    return {
        value: language,
        onChange: onChange,
    };
};
exports.default = useLanguage;
