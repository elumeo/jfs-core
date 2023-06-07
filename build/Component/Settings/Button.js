"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ color: 'inherit', onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(Settings_1.default, {}) })));
};
exports.default = Button;
