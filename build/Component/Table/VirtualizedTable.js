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
exports.ellipsesStyle = exports.visuallyHiddenStyle = void 0;
var react_1 = __importDefault(require("react"));
var react_virtuoso_1 = require("react-virtuoso");
var Table_1 = __importDefault(require("./Table"));
var Container_1 = __importDefault(require("./Container"));
var NoResults_1 = __importDefault(require("./Row/NoResults"));
var material_1 = require("@mui/material");
var Footer_1 = __importDefault(require("./Row/Footer"));
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
    var _b = _a.data, data = _b === void 0 ? [] : _b, sortBy = _a.sortBy, sortDirection = _a.sortDirection, _c = _a.compare, compare = _c === void 0 ? function (a, b) { return (a[sortBy] < b[sortBy]) ? -1 : a[sortBy] === b[sortBy] ? 0 : 1; } : _c, _d = _a.filter, filter = _d === void 0 ? function () { return true; } : _d, tableProps = _a.tableProps, tableRowProps = _a.tableRowProps, propComponents = _a.components, props = __rest(_a, ["data", "sortBy", "sortDirection", "compare", "filter", "tableProps", "tableRowProps", "components"]);
    var ref = react_1.default.useRef(null);
    var _sorted = react_1.default.useMemo(function () {
        var sorted = sort(data.filter(filter), sortBy, compare);
        return sortDirection === 'desc'
            ? sorted.reverse()
            : sorted;
    }, [data, sortBy, sortDirection, compare, filter]);
    var components = react_1.default.useMemo(function () { return (__assign({ EmptyPlaceholder: NoResults_1.default, Scroller: Container_1.default, Table: function (props) { return react_1.default.createElement(Table_1.default, __assign({}, props, tableProps)); }, TableHead: material_1.TableHead, TableRow: react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(material_1.TableRow, __assign({}, props, tableRowProps, { ref: ref })); }), TableBody: material_1.TableBody, TableFoot: react_1.default.forwardRef(function (props, ref) { return react_1.default.createElement(Footer_1.default, __assign({}, props, { ref: ref })); }) }, propComponents)); }, [propComponents]);
    return react_1.default.createElement(react_virtuoso_1.TableVirtuoso, __assign({ ref: ref, data: _sorted, components: components, overscan: 20 }, props));
};
exports.default = VirtualizedTable;
