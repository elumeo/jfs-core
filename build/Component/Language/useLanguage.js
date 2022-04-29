"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var Redux_1 = require("../../Types/Redux");
var react_1 = require("react");
var Action_1 = require("../../Store/Action");
var useLanguage = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var language = (0, Redux_1.useSelector)(function (state) {
        return state.Core.Language.language || state.Core.Configuration.config.Language;
    });
    var onChange = (0, react_1.useCallback)(function (next) { return dispatch((0, Action_1.changeLanguageAction)(next)); }, [
        dispatch,
    ]);
    return {
        value: language,
        onChange: onChange,
    };
};
exports.default = useLanguage;
