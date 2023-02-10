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
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var material_1 = require("@mui/material");
var Definition_1 = __importDefault(require("../App/Stateless/Style/Theme/Definition"));
var Navigation_1 = require("../../Store/Action/Navigation");
var react_redux_1 = require("react-redux");
var toolbarStyle = {
    height: Definition_1.default.mixins.toolbar.minHeight,
    overflow: 'hidden',
    pr: .25
};
var AppToolbar = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'dense' : _b, _c = _a.position, position = _c === void 0 ? 'sticky' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.appBarProps, appBarProps = _e === void 0 ? {} : _e, _f = _a.toolbarProps, toolbarProps = _f === void 0 ? {} : _f, props = __rest(_a, ["variant", "position", "color", "appBarProps", "toolbarProps"]);
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var openDrawer = react_1.default.useCallback(function () { return dispatch((0, Navigation_1.openNavigation)()); }, [dispatch]);
    return (react_1.default.createElement(material_1.AppBar, __assign({ position: position, sx: toolbarStyle, color: color }, appBarProps),
        react_1.default.createElement(material_1.Toolbar, __assign({ disableGutters: true, variant: variant }, toolbarProps),
            react_1.default.createElement(material_1.Stack, { direction: 'row', justifyContent: 'space-between', sx: toolbarStyle, alignItems: 'center', width: '100%' },
                react_1.default.createElement(material_1.Stack, { direction: 'row', justifyContent: 'flex-start', sx: toolbarStyle, spacing: 1, alignItems: 'center' },
                    react_1.default.createElement(material_1.IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openDrawer },
                        react_1.default.createElement(Menu_1.default, null)),
                    react_1.default.createElement(material_1.Typography, { variant: 'h6', noWrap: true }, formatMessage({ id: 'app.title' })),
                    props.left || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(material_1.Stack, { direction: 'row', justifyContent: 'center', sx: toolbarStyle, alignItems: 'center' }, props.middle || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(material_1.Stack, { direction: 'row', sx: toolbarStyle, justifyContent: 'flex-end', alignItems: 'center' }, props.right || react_1.default.createElement(react_1.default.Fragment, null))))));
};
exports.default = AppToolbar;
