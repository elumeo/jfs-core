"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ArrowBack_1 = __importDefault(require("@mui/icons-material/ArrowBack"));
var Redux_1 = require("../../Types/Redux");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var Button = function () {
    var navigationOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Navigation.navigationOpen; });
    var dispatch = (0, react_redux_1.useDispatch)();
    var toggle = react_1.default.useCallback(function () { return dispatch(navigationOpen ? (0, Action_1.closeNavigation)() : (0, Action_1.openNavigation)()); }, [navigationOpen]);
    return (react_1.default.createElement(IconButton_1.default, { onClick: toggle },
        react_1.default.createElement(ArrowBack_1.default, { fontSize: 'small' })));
};
exports.default = Button;
