"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_intl_1 = require("react-intl");
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var core_1 = require("@material-ui/core");
var Definition_1 = __importDefault(require("../App/Stateless/Style/Theme/Definition"));
var Navigation_1 = require("../../Store/Action/Navigation");
var react_redux_1 = require("react-redux");
var toolbarStyle = { height: Definition_1.default.mixins.toolbar.minHeight };
var AppToolbar = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'dense' : _b, _c = _a.position, position = _c === void 0 ? 'sticky' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, tools = __rest(_a, ["variant", "position", "color"]);
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var openDrawer = react_1.default.useCallback(function () { return dispatch((0, Navigation_1.openNavigation)()); }, [dispatch]);
    return (react_1.default.createElement(core_1.AppBar, { position: position, color: color },
        react_1.default.createElement(core_1.Toolbar, { disableGutters: true, variant: variant, style: toolbarStyle },
            react_1.default.createElement(core_1.Grid, { container: true, justifyContent: 'space-between', alignItems: 'center' },
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-start', alignItems: 'center' },
                    react_1.default.createElement(core_1.IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openDrawer },
                        react_1.default.createElement(Menu_1.default, null)),
                    react_1.default.createElement(core_1.Typography, { variant: 'h6', noWrap: true }, formatMessage({ id: 'app.title' })),
                    tools.left || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'center', alignItems: 'center' }, tools.middle || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-end', alignItems: 'center' }, tools.right || react_1.default.createElement(react_1.default.Fragment, null))))));
};
exports.default = AppToolbar;
