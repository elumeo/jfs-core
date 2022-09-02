"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var getNavigationWidth = function (theme) { return theme.spacing(39); };
var useGridContainerStyles = function (theme, spacing) { return ({
    minHeight: "calc(100% - ".concat(theme.mixins.toolbar.minHeight, "px - ").concat(theme.spacing(spacing.height), "px)"),
    width: "calc(100% - ".concat(theme.spacing(spacing.width), "px)"),
    marginLeft: spacing.width > 0 ? "".concat(theme.spacing(1), "px") : 0,
    marginRight: spacing.width > 0 ? "".concat(theme.spacing(1), "px") : 0,
    marginTop: spacing.height > 0 ? "".concat(theme.spacing(1), "px") : 0,
    marginBottom: spacing.height > 0 ? "".concat(theme.spacing(1), "px") : 0,
}); };
var useGridItemNavigationStyles = function (theme) { return ({
    width: "".concat(getNavigationWidth(theme), "px")
}); };
var useGridItemContentStyles = function (theme, hasNavigation) { return ({
    marginLeft: hasNavigation ? "".concat(theme.spacing(1), "px") : 0,
    width: hasNavigation ? "calc(100% - ".concat(getNavigationWidth(theme), "px - ").concat(theme.spacing(1), "px)") : '100%'
}); };
var AppLayout = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.navigation, navigation = _b === void 0 ? null : _b, _c = _a.spacing, spacing = _c === void 0 ? { width: 2, height: 2.5 } : _c;
    var theme = (0, styles_1.useTheme)();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var gridContainerStyles = (0, react_1.useMemo)(function () { return useGridContainerStyles(theme, spacing); }, [spacing]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var gridItemNavigationStyles = (0, react_1.useMemo)(function () { return useGridItemNavigationStyles(theme); }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var gridItemContentStyles = (0, react_1.useMemo)(function () { return useGridItemContentStyles(theme, navigation !== null); }, [navigation]);
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, style: gridContainerStyles, className: className, wrap: 'nowrap' },
            navigation !== null && react_1.default.createElement(core_1.Grid, { item: true, style: gridItemNavigationStyles }, navigation),
            react_1.default.createElement(core_1.Grid, { item: true, style: gridItemContentStyles }, children)));
};
exports.default = (0, react_1.memo)(AppLayout);
