"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
        return react_1.default.createElement(Empty_1.default, null);
    }
    return (react_1.default.createElement(List_1.default, { sx: classes.root },
        react_1.default.createElement(react_transition_group_1.TransitionGroup, null, history.map(function (notification) { return (react_1.default.createElement(material_1.Collapse, { key: notification.id },
            react_1.default.createElement(ListItem_1.default, { className: 'hallotest' },
                react_1.default.createElement(Card_1.default, { notification: notification, temporary: false })))); }))));
};
exports.default = All;
