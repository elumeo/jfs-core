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
    return visible ? ((0, jsx_runtime_1.jsxs)(ListItem_1.default, __assign({ ref: ref, button: true, onClick: function (event) {
            if (onClickRoute != undefined && pathname !== onClickRoute) {
                navigate(onClickRoute);
            }
            dispatch((0, Action_1.closeNavigation)());
            if (onClick) {
                onClick(event);
            }
        }, selected: active }, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Icon_1.default, { children: iconName }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: messageString ? messageString : formatMessage({ id: messageId }) })] }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
});
exports.default = NavigationItem;
