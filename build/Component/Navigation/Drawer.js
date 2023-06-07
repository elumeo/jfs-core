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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = __importDefault(require("react"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var List_1 = __importDefault(require("@mui/material/List"));
var Redux_1 = require("Types/Redux");
var Header_1 = __importDefault(require("./Header"));
var react_redux_1 = require("react-redux");
var Action_1 = require("Store/Action");
var material_1 = require("@mui/material");
var Drawer = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? 270 : _b, rest = __rest(_a, ["children", "width"]);
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigationOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Navigation.navigationOpen; });
    var close = react_1.default.useCallback(function () { return dispatch((0, Action_1.closeNavigation)()); }, [dispatch]);
    return (0, jsx_runtime_1.jsx)(Drawer_1.default, __assign({ open: navigationOpen, anchor: 'left', onClose: close }, rest, { children: (0, jsx_runtime_1.jsxs)(material_1.Box, __assign({ sx: { width: width } }, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(List_1.default, { children: children })] })) }));
};
exports.default = Drawer;
