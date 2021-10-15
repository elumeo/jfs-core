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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentEllipseMode = void 0;
var react_1 = __importStar(require("react"));
var TableCell_1 = require("../../Table/TableCell");
var ContentEllipseMode;
(function (ContentEllipseMode) {
    ContentEllipseMode["None"] = "none";
    ContentEllipseMode["Normal"] = "normal";
    ContentEllipseMode["Lines"] = "lines";
})(ContentEllipseMode = exports.ContentEllipseMode || (exports.ContentEllipseMode = {}));
var TableCellDefault = function (_a) {
    var cellData = _a.cellData, _b = _a.isNumeric, isNumeric = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.contentEllipseMode, contentEllipseMode = _d === void 0 ? ContentEllipseMode.Lines : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e;
    var getClassName = function () {
        switch (contentEllipseMode) {
            case ContentEllipseMode.Lines:
                return 'virtualized-table__content-ellipses-lines';
            case ContentEllipseMode.Normal:
                return 'virtualized-table__content-ellipses';
            case ContentEllipseMode.None:
            default:
                return '';
        }
    };
    return react_1.default.createElement(TableCell_1.StyledTableCellBase, { isNumeric: isNumeric, className: className },
        isLoading === false && react_1.default.createElement("span", { className: getClassName() }, cellData),
        isLoading && react_1.default.createElement(TableCell_1.TableCellLoadingContent, null));
};
exports.default = (0, react_1.memo)(TableCellDefault);
