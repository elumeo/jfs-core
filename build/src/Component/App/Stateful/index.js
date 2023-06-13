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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_redux_1 = require("react-redux");
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Initializer_1 = __importDefault(require("./Initializer"));
var International_1 = __importDefault(require("./International"));
var Snackbar_1 = __importDefault(require("./Snackbar"));
var Initialized_1 = __importDefault(require("./Initialized"));
var Uninitialized_1 = __importDefault(require("./Uninitialized"));
var Stateful = function (_a) {
    var store = _a.store, children = _a.children;
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, __assign({ store: store }, { children: (0, jsx_runtime_1.jsx)(WebSocket_1.default, { children: children }) })));
};
Stateful.Snackbar = Snackbar_1.default;
Stateful.Initializer = Initializer_1.default;
Stateful.International = International_1.default;
Stateful.Initialized = Initialized_1.default;
Stateful.Uninitialized = Uninitialized_1.default;
exports.default = Stateful;
