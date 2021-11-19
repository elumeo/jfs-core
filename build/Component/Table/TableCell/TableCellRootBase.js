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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var TableCellRootBase = function (_a) {
    var children = _a.children, _b = _a.isNumeric, isNumeric = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c;
    return react_1.default.createElement(core_1.TableCell, { component: 'div', className: "virtualized-table__cell virtualized-table__flex-container " + className, variant: 'body', align: isNumeric ? 'right' : 'left' }, children);
};
exports.default = (0, react_1.memo)(TableCellRootBase);
