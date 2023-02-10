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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryParams = void 0;
var lodash_1 = require("lodash");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var toJSON = function (param) {
    return Object.fromEntries(param.entries());
};
var useQueryParams = function (defaultParams) {
    var _a = (0, react_router_dom_1.useSearchParams)(new URLSearchParams(defaultParams)), searchParams = _a[0], setSearchParams = _a[1];
    var update = (0, react_1.useCallback)(function (newParams) {
        var obj = toJSON(searchParams);
        var joined = __assign(__assign({}, obj), newParams);
        var newParam = new URLSearchParams((0, lodash_1.pick)(joined, Object.keys(joined)
            //@INFO : omit nullish keys
            .filter(function (key) { return joined[key] !== null && joined[key] !== undefined; })));
        setSearchParams(newParam);
    }, [setSearchParams, searchParams]);
    return [toJSON(searchParams), update, searchParams];
};
exports.useQueryParams = useQueryParams;
exports.default = exports.useQueryParams;
