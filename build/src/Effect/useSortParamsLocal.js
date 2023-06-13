"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useSortParamsLocal = function (init) {
    var _a = react_1.default.useState(init.sortBy || 'id'), sortBy = _a[0], setSortBy = _a[1];
    var _b = react_1.default.useState(init.sortDirection || 'asc'), sortDirection = _b[0], setSortDirection = _b[1];
    var update = react_1.default.useCallback(function (_a) {
        var newSortBy = _a.sortBy, newSortDirection = _a.sortDirection;
        setSortBy(function (old) { return newSortBy || old; });
        setSortDirection(function (old) { return newSortDirection || old; });
    }, [setSortBy, setSortDirection]);
    return [{ sortBy: sortBy, sortDirection: sortDirection }, update];
};
exports.default = useSortParamsLocal;
