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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var BaseRoute_1 = __importDefault(require("./BaseRoute"));
var NoAuthRoute = function (props) {
    var dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(function () {
        dispatch((0, Action_1.enterUnauthorizedRoute)());
    }, []);
    return (0, jsx_runtime_1.jsx)(BaseRoute_1.default, __assign({}, props));
};
exports.default = NoAuthRoute;
