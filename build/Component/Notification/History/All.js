"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../../Types/Redux");
var Card_1 = __importDefault(require("../../Notification/Card"));
var Empty_1 = __importDefault(require("./Empty"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var react_transition_group_1 = require("react-transition-group");
var useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
        gap: theme.spacing(1),
        padding: theme.spacing(2, 0)
    },
    item: {
        width: '100%'
    }
}); });
var All = function () {
    var classes = useStyles();
    var history = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    (0, Redux_1.useSelector)(function (state) { return state.Core.App.appInitialized; });
    if (history.length < 1) {
        return react_1.default.createElement(Empty_1.default, null);
    }
    return (react_1.default.createElement(List_1.default, { className: classes.root },
        react_1.default.createElement(react_transition_group_1.TransitionGroup, null, history.map(function (notification) { return (react_1.default.createElement(core_1.Collapse, { key: notification.id },
            react_1.default.createElement(ListItem_1.default, { className: classes.item },
                react_1.default.createElement(Card_1.default, { notification: notification, temporary: false })))); }))));
};
exports.default = All;
