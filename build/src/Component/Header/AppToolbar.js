"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var react_1 = __importStar(require("react"));
var react_intl_1 = require("react-intl");
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var AppToolbar = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'dense' : _b, _c = _a.position, position = _c === void 0 ? 'sticky' : _c, tools = __rest(_a, ["variant", "position"]);
    var theme = (0, styles_1.useTheme)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var openNavigation = (0, useActions_1.default)().openNavigation;
    var openDrawer = react_1.default.useCallback(function () { return openNavigation(); }, []);
    return (react_1.default.createElement(core_1.AppBar, { position: position },
        react_1.default.createElement(core_1.Toolbar, { disableGutters: true, variant: variant, style: { height: theme.mixins.toolbar.minHeight } },
            react_1.default.createElement(core_1.Grid, { container: true, justifyContent: 'space-between', alignItems: 'center' },
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-start', alignItems: 'center' },
                    react_1.default.createElement(core_1.IconButton, { color: 'inherit', "aria-label": 'menu', onClick: openDrawer },
                        react_1.default.createElement(Menu_1.default, null)),
                    react_1.default.createElement(core_1.Typography, { variant: 'h6', noWrap: true }, formatMessage({ id: 'app.title' })),
                    tools.left || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'center', alignItems: 'center' }, tools.middle || react_1.default.createElement(react_1.default.Fragment, null)),
                react_1.default.createElement(core_1.Grid, { container: true, item: true, xs: 4, justifyContent: 'flex-end', alignItems: 'center' }, tools.right || react_1.default.createElement(react_1.default.Fragment, null))))));
};
exports.default = (0, react_1.memo)(AppToolbar);
