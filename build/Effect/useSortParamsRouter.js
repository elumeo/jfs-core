"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useQueryParams_1 = __importDefault(require("./useQueryParams"));
var useSortParamsRouter = function (init) {
    var _a = (0, useQueryParams_1.default)(init), params = _a[0], setParam = _a[1];
    var update = (0, react_1.useCallback)(function (_a) {
        var sortBy = _a.sortBy, sortDirection = _a.sortDirection;
        setParam({
            sortBy: sortBy,
            sortDirection: sortDirection,
        });
    }, [setParam]);
    return [params, update];
};
exports.default = useSortParamsRouter;
