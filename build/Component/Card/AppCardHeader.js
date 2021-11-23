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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Refresh_1 = __importDefault(require("@material-ui/icons/Refresh"));
var styles_1 = require("@material-ui/core/styles");
var AppCardHeader = function (_a) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, title = _a.title, _c = _a.subtitle, subtitle = _c === void 0 ? null : _c, _d = _a.titleIcon, titleIcon = _d === void 0 ? null : _d, _e = _a.onRefresh, onRefresh = _e === void 0 ? null : _e, _f = _a.refreshButtonColor, refreshButtonColor = _f === void 0 ? 'secondary' : _f, _g = _a.refreshButtonSize, refreshButtonSize = _g === void 0 ? 'small' : _g, _h = _a.additionalTitleComponent, additionalTitleComponent = _h === void 0 ? null : _h, _j = _a.action, action = _j === void 0 ? null : _j;
    var theme = (0, styles_1.useTheme)();
    var cardHeaderStyles = (0, react_1.useMemo)(function () { return ({ position: 'relative', alignItems: 'flex-start' }); }, []);
    var linearProgressRootStyles = (0, react_1.useMemo)(function () { return ({
        position: 'absolute',
        width: 'calc(100% + ' + theme.spacing(4) + 'px)',
        top: 0,
        left: (theme.spacing(2) * -1) + 'px'
    }); }, []);
    var buildRefreshButton = function () { return react_1.default.createElement(core_1.Grid, { item: true },
        react_1.default.createElement(core_1.IconButton, { color: refreshButtonColor, size: refreshButtonSize, disabled: isLoading, onClick: onRefresh },
            react_1.default.createElement(Refresh_1.default, null))); };
    var headerTitle = react_1.default.createElement(react_1.default.Fragment, null,
        isLoading && react_1.default.createElement(core_1.LinearProgress, { color: 'secondary', style: linearProgressRootStyles }),
        react_1.default.createElement(core_1.Grid, { container: true, spacing: 1, alignItems: 'center' },
            titleIcon !== null && react_1.default.createElement(core_1.Grid, { item: true }, titleIcon),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: 'h5' }, title)),
            onRefresh !== null && buildRefreshButton(),
            additionalTitleComponent !== null && react_1.default.createElement(core_1.Grid, { item: true }, additionalTitleComponent)));
    return react_1.default.createElement(core_1.CardHeader, { style: cardHeaderStyles, subheader: subtitle, title: headerTitle, action: action });
};
exports.default = (0, react_1.memo)(AppCardHeader);
