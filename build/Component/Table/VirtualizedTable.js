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
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = __importStar(require("react"));
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
    var _b = _a.data, data = _b === void 0 ? [] : _b, sortBy = _a.sortBy, sortDirection = _a.sortDirection, _c = _a.compare, compare = _c === void 0 ? function (a, b) { return (a[sortBy] < b[sortBy]) ? -1 : a[sortBy] === b[sortBy] ? 0 : 1; } : _c, _d = _a.filter, filter = _d === void 0 ? function () { return true; } : _d, slotProps = _a.slotProps, propComponents = _a.components, _e = _a.isLoading, isLoading = _e === void 0 ? false : _e, props = __rest(_a, ["data", "sortBy", "sortDirection", "compare", "filter", "slotProps", "components", "isLoading"]);
    var ref = react_1.default.useRef(null);
    var _sorted = react_1.default.useMemo(function () {
        var sorted = sort(data.filter(filter), sortBy, compare);
        return sortDirection === 'desc'
            ? sorted.reverse()
            : sorted;
    }, [data, sortBy, sortDirection, compare, filter]);
    var components = react_1.default.useMemo(function () { return (__assign({ EmptyPlaceholder: (data.length == 0 && !isLoading)
            ? NoResults_1.default
            : undefined, Scroller: Container_1.default, Table: function (_props) {
            var _a, _b, _c, _d;
            return (0, jsx_runtime_1.jsx)(Table_1.default, __assign({}, _props, (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.tableProps) !== null && _a !== void 0 ? _a : {}, { sx: __assign(__assign({ tableLayout: 'fixed' }, ((_b = _props === null || _props === void 0 ? void 0 : _props.sx) !== null && _b !== void 0 ? _b : {})), ((_d = (_c = slotProps === null || slotProps === void 0 ? void 0 : slotProps.tableProps) === null || _c === void 0 ? void 0 : _c.sx) !== null && _d !== void 0 ? _d : {})) }));
        }, TableHead: material_1.TableHead, TableRow: react_1.default.forwardRef(function (props, ref) { var _a; return (0, jsx_runtime_1.jsx)(material_1.TableRow, __assign({}, props, (_a = slotProps === null || slotProps === void 0 ? void 0 : slotProps.tableRowProps) !== null && _a !== void 0 ? _a : {}, { ref: ref })); }), TableBody: material_1.TableBody, TableFoot: react_1.default.forwardRef(function (props, ref) { return (0, jsx_runtime_1.jsx)(Footer_1.default, __assign({ isLoading: isLoading }, props, { ref: ref })); }) }, propComponents)); }, [propComponents, slotProps, isLoading]);
    return (0, jsx_runtime_1.jsx)(react_virtuoso_1.TableVirtuoso, __assign({ ref: ref, data: _sorted, components: components, fixedFooterContent: function () { return undefined; }, overscan: 20 }, props));
};
exports.default = (0, react_1.memo)(VirtualizedTable);
