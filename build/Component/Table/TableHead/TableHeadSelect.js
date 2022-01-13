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
var styles_1 = require("@material-ui/core/styles");
var loadingStyles = { marginLeft: '12px', marginRight: '11px' };
var checkboxStyles = { padding: '8px' };
var TableHeadSelect = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.loading, loading = _c === void 0 ? false : _c, checked = _a.checked, _d = _a.height, height = _d === void 0 ? 48 : _d, _e = _a.onChange, onChange = _e === void 0 ? null : _e, _f = _a.id, id = _f === void 0 ? 'product-select-all' : _f, _g = _a.name, name = _g === void 0 ? 'product-select[]' : _g, _h = _a.value, value = _h === void 0 ? '###all###' : _h, _j = _a.className, className = _j === void 0 ? '' : _j;
    var theme = (0, styles_1.useTheme)();
    var styles = (0, react_1.useMemo)(function () { return ({
        height: height + 'px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        maxWidth: '100%'
    }); }, []);
    return react_1.default.createElement(core_1.TableCell, { component: 'div', className: "virtualized-table__cell virtualized-table__flex-container virtualized-table--no-click ".concat(className), variant: 'head', style: styles },
        loading && react_1.default.createElement("div", { style: loadingStyles },
            react_1.default.createElement(core_1.CircularProgress, { size: 16 })),
        loading === false && react_1.default.createElement(core_1.Checkbox, { style: checkboxStyles, size: 'small', disabled: disabled, id: id, name: name, value: value, checked: checked, onChange: onChange }));
};
exports.default = (0, react_1.memo)(TableHeadSelect);
