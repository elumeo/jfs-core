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
exports.cellStyles = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var TableCell_1 = require("../../Table/TableCell");
exports.cellStyles = (0, styles_1.makeStyles)(function () {
    return (0, styles_1.createStyles)({
        wrapContent: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    });
});
var TableCellDefault = function (_a) {
    var _b;
    var cellData = _a.cellData, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.wrapContent, wrapContent = _d === void 0 ? true : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e;
    var classes = (0, exports.cellStyles)();
    var globalClasses = (0, VirtualizedTable_1.globalStyles)();
    return react_1.default.createElement(react_1.default.Fragment, null,
        isLoading === false && react_1.default.createElement(core_1.TableCell, { component: 'div', className: (0, clsx_1.default)(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: '100%' }, align: isNumeric ? 'right' : 'left' },
            react_1.default.createElement("span", { className: (0, clsx_1.default)((_b = {}, _b[classes.wrapContent] = wrapContent, _b)) }, cellData)),
        isLoading && react_1.default.createElement(TableCell_1.TableCellLoading, null));
};
exports.default = (0, react_1.memo)(TableCellDefault);
