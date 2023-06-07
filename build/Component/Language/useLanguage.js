"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Redux_1 = require("../../Types/Redux");
var Action_1 = require("../../Store/Action");
var react_1 = __importDefault(require("react"));
var useLanguage = function () {
    var language = (0, Redux_1.useSelector)(function (state) {
        return state.Core.Language.language || state.Core.Configuration.config.Language;
    });
    var dispatch = (0, react_redux_1.useDispatch)();
    var onChange = react_1.default.useCallback(function (next) { return dispatch((0, Action_1.changeLanguageAction)(next)); }, [
        dispatch,
    ]);
    return {
        value: language,
        onChange: onChange,
    };
};
exports.default = useLanguage;
