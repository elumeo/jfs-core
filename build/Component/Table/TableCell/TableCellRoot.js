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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var TableCellRoot = function (_a) {
    var children = _a.children, _b = _a.isNumeric, isNumeric = _b === void 0 ? false : _b, _c = _a.rowHeight, rowHeight = _c === void 0 ? '100px' : _c;
    var theme = (0, styles_1.useTheme)();
    var styles = (0, react_1.useMemo)(function () { return (__assign(__assign({}, VirtualizedTable_1.flexContainerStyles), { height: rowHeight, flex: 1, padding: theme.spacing(1), maxWidth: '100%' })); }, [rowHeight]);
    return react_1.default.createElement(core_1.TableCell, { component: 'div', style: styles, variant: 'body', align: isNumeric ? 'right' : 'left' }, children);
};
exports.default = (0, react_1.memo)(TableCellRoot);
