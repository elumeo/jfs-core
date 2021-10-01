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
exports.ContentEllipseMode = exports.cellStyles = void 0;
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var TableCell_1 = require("../../Table/TableCell");
exports.cellStyles = (0, styles_1.makeStyles)(function () {
    return (0, styles_1.createStyles)({
        contentEllipses: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        contentEllipsesLines: {
            overflow: 'hidden',
            whiteSpace: 'normal',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': function (props) { var _a; return (_a = props.contentEllipseLines) !== null && _a !== void 0 ? _a : 4; },
            display: '-webkit-box'
        }
    });
});
var ContentEllipseMode;
(function (ContentEllipseMode) {
    ContentEllipseMode["Normal"] = "normal";
    ContentEllipseMode["Lines"] = "lines";
})(ContentEllipseMode = exports.ContentEllipseMode || (exports.ContentEllipseMode = {}));
var TableCellDefault = function (_a) {
    var _b;
    var cellData = _a.cellData, _c = _a.isNumeric, isNumeric = _c === void 0 ? false : _c, _d = _a.contentEllipseMode, contentEllipseMode = _d === void 0 ? ContentEllipseMode.Normal : _d, _e = _a.contentEllipseLines, contentEllipseLines = _e === void 0 ? 4 : _e, _f = _a.isLoading, isLoading = _f === void 0 ? false : _f;
    var classes = (0, exports.cellStyles)({ contentEllipseLines: contentEllipseLines });
    var globalClasses = (0, VirtualizedTable_1.globalStyles)();
    return react_1.default.createElement(react_1.default.Fragment, null,
        isLoading === false && react_1.default.createElement(core_1.TableCell, { component: 'div', className: (0, clsx_1.default)(globalClasses.tableCell, globalClasses.flexContainer), variant: 'body', style: { height: '100%' }, align: isNumeric ? 'right' : 'left' },
            react_1.default.createElement("span", { className: (0, clsx_1.default)((_b = {},
                    _b[classes.contentEllipses] = contentEllipseMode === ContentEllipseMode.Normal,
                    _b[classes.contentEllipsesLines] = contentEllipseMode === ContentEllipseMode.Lines,
                    _b)) }, cellData)),
        isLoading && react_1.default.createElement(TableCell_1.TableCellLoading, null));
};
exports.default = (0, react_1.memo)(TableCellDefault);
