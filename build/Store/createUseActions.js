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
var react_redux_1 = require("react-redux");
var createUseActions = function (Action) { return function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    return Object.keys(Action).reduce(function (previous, key) {
        var _a;
        var action = Action[key];
        return __assign(__assign({}, previous), (_a = {}, _a[key] = function () {
            var parameters = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                parameters[_i] = arguments[_i];
            }
            return dispatch(action.apply(void 0, parameters));
        }, _a));
    }, {});
}; };
exports.default = createUseActions;
