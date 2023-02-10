"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var Icon_1 = __importDefault(require("@mui/material/Icon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Redux_1 = require("../../Types/Redux");
var react_intl_1 = require("react-intl");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var react_router_dom_1 = require("react-router-dom");
var NavigationItem = react_1.default.forwardRef(function (_a, ref) {
    var iconName = _a.iconName, messageId = _a.messageId, onClick = _a.onClick, active = _a.active, messageString = _a.messageString, authorizedOnly = _a.authorizedOnly, unauthorizedOnly = _a.unauthorizedOnly, onClickRoute = _a.onClickRoute;
    var dispatch = (0, react_redux_1.useDispatch)();
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var isAuthorized = (0, Redux_1.useSelector)(function (state) { return state.Core.Session.isAuthorized; });
    var visible = (!authorizedOnly && !unauthorizedOnly) || // always display these
        (isAuthorized && authorizedOnly) || // only when authorized
        (!isAuthorized && unauthorizedOnly); // only when unauthorized
    return visible ? (react_1.default.createElement(ListItem_1.default, { ref: ref, button: true, onClick: function (event) {
            if (onClickRoute != undefined && pathname !== onClickRoute) {
                navigate(onClickRoute);
            }
            dispatch((0, Action_1.closeNavigation)());
            if (onClick) {
                onClick(event);
            }
        }, selected: active },
        react_1.default.createElement(ListItemIcon_1.default, null,
            react_1.default.createElement(Icon_1.default, null, iconName)),
        react_1.default.createElement(ListItemText_1.default, { primary: messageString ? messageString : formatMessage({ id: messageId }) }))) : (react_1.default.createElement(react_1.default.Fragment, null));
});
exports.default = NavigationItem;
