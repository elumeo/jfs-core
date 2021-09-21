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
var react_intl_1 = require("react-intl");
var styles_1 = require("@material-ui/core/styles");
var cellStyles = (0, styles_1.makeStyles)(function (theme) {
    return (0, styles_1.createStyles)({
        NoRowsContent: {
            textAlign: 'center',
            padding: theme.spacing(2),
        },
    });
});
var TableRowNoResults = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var css = cellStyles();
    return (react_1.default.createElement("div", { className: css.NoRowsContent }, formatMessage({ id: 'table.noResults' })));
};
exports.default = (0, react_1.memo)(TableRowNoResults);
