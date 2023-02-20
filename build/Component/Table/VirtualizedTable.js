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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ellipsesStyle = exports.flexContainerStyles = exports.visuallyHiddenStyle = void 0;
var react_1 = __importDefault(require("react"));
var react_virtuoso_1 = require("react-virtuoso");
var Table_1 = __importDefault(require("@mui/material/Table"));
var TableBody_1 = __importDefault(require("@mui/material/TableBody"));
var TableContainer_1 = __importDefault(require("@mui/material/TableContainer"));
var TableHead_1 = __importDefault(require("@mui/material/TableHead"));
var TableRow_1 = __importDefault(require("@mui/material/TableRow"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Color_1 = require("../../Constant/Color");
exports.visuallyHiddenStyle = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
};
exports.flexContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box'
};
exports.ellipsesStyle = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
};
var sort = function (data, sortBy, compare) {
    if (!sortBy) {
        return data;
    }
    return data.sort(function (a, b) {
        if (compare) {
            return compare(a, b);
        }
        return 0;
    });
};
var VirtualizedTable = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, sortBy = _a.sortBy, sortDirection = _a.sortDirection, _c = _a.compare, compare = _c === void 0 ? function (a, b) { return a[sortBy] < b[sortBy] ? -1 : 1; } : _c, _d = _a.filter, filter = _d === void 0 ? function () { return true; } : _d, props = __rest(_a, ["data", "sortBy", "sortDirection", "compare", "filter"]);
    var ref = react_1.default.useRef(null);
    var _sorted = react_1.default.useMemo(function () {
        var sorted = sort(data.filter(filter), sortBy, compare);
        return sortDirection === 'desc'
            ? sorted.reverse()
            : sorted;
    }, [data, sortBy, sortDirection, compare, filter]);
    var components = react_1.default.useMemo(function () { return (__assign({ Scroller: react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(TableContainer_1.default, __assign({ component: Paper_1.default }, props, { ref: ref })); }), Table: function (props) { return react_1.default.createElement(Table_1.default, __assign({}, props, { sx: { borderCollapse: 'separate' } })); }, TableHead: TableHead_1.default, TableRow: function (props) {
            return react_1.default.createElement(TableRow_1.default, __assign({ sx: {
                    backgroundColor: props['data-index'] % 2
                        ? "".concat(Color_1.topas.main, "20")
                        : 'inherit',
                } }, props));
        }, TableBody: react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(TableBody_1.default, __assign({}, props, { ref: ref })); }) }, props === null || props === void 0 ? void 0 : props.components)); }, [props]);
    return (react_1.default.createElement(react_virtuoso_1.TableVirtuoso, __assign({ ref: ref, data: _sorted, components: components, overscan: 20 }, props)));
};
exports.default = VirtualizedTable;
