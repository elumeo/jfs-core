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
var VirtualizedTable_1 = require("../../Table/VirtualizedTable");
var ContentEllipseMode;
(function (ContentEllipseMode) {
    ContentEllipseMode["None"] = "none";
    ContentEllipseMode["Normal"] = "normal";
    ContentEllipseMode["Lines"] = "lines";
})(ContentEllipseMode = exports.ContentEllipseMode || (exports.ContentEllipseMode = {}));
var TableCellDefault = function (_a) {
    var cellData = _a.cellData, _b = _a.isNumeric, isNumeric = _b === void 0 ? false : _b, _c = _a.contentEllipseMode, contentEllipseMode = _c === void 0 ? ContentEllipseMode.Lines : _c, _d = _a.contentEllipseLines, contentEllipseLines = _d === void 0 ? 4 : _d, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e;
    var ellipsesLinesStyle = (0, react_1.useMemo)(function () { return ({
        overflow: 'hidden',
        whiteSpace: 'normal',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: contentEllipseLines,
        display: '-webkit-box',
    }); }, [contentEllipseLines]);
    var getStyles = (0, react_1.useCallback)(function () {
        switch (contentEllipseMode) {
            case ContentEllipseMode.Lines:
                return ellipsesLinesStyle;
            case ContentEllipseMode.Normal:
                return VirtualizedTable_1.ellipsesStyle;
            case ContentEllipseMode.None:
            default:
                return null;
        }
    }, []);
    return react_1.default.createElement(TableCell_1.TableCellRoot, { isNumeric: isNumeric },
        isLoading === false && react_1.default.createElement("span", { style: getStyles() }, cellData),
        isLoading && react_1.default.createElement(TableCell_1.TableCellLoadingContent, null));
};
exports.default = (0, react_1.memo)(TableCellDefault);
