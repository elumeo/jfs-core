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
var jsx_runtime_1 = require("react/jsx-runtime");
var Redux_1 = require("../../../Types/Redux");
var Card_1 = __importDefault(require("../../Notification/Card"));
var Empty_1 = __importDefault(require("./Empty"));
var List_1 = __importDefault(require("@mui/material/List"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var material_1 = require("@mui/material");
var react_transition_group_1 = require("react-transition-group");
var Definition_1 = __importDefault(require("../../App/Stateless/Style/Theme/Definition"));
var classes = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        gap: Definition_1.default.spacing(1),
        padding: Definition_1.default.spacing(2, 0)
    },
};
var All = function () {
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    (0, Redux_1.useSelector)(function (state) { return state.Core.App.appInitialized; });
    if (history.length < 1) {
        return (0, jsx_runtime_1.jsx)(Empty_1.default, {});
    }
    return ((0, jsx_runtime_1.jsx)(List_1.default, __assign({ sx: classes.root }, { children: (0, jsx_runtime_1.jsx)(react_transition_group_1.TransitionGroup, { children: history.map(function (notification) { return ((0, jsx_runtime_1.jsx)(material_1.Collapse, { children: (0, jsx_runtime_1.jsx)(ListItem_1.default, { children: (0, jsx_runtime_1.jsx)(Card_1.default, { notification: notification, temporary: false }) }) }, notification.id)); }) }) })));
};
exports.default = All;
