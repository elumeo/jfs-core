"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../Types/Redux");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Settings_1 = __importDefault(require("@mui/icons-material/Settings"));
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var Button = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var settingsOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Settings.settingsOpen; });
    var onClick = react_1.default.useCallback(function () {
        dispatch(settingsOpen ? (0, Action_1.closeSettings)() : (0, Action_1.openSettings)());
    }, [settingsOpen, dispatch]);
    return (react_1.default.createElement(IconButton_1.default, { color: 'inherit', onClick: onClick },
        react_1.default.createElement(Settings_1.default, null)));
};
exports.default = Button;
