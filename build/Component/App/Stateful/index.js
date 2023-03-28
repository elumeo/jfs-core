"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Initializer_1 = __importDefault(require("./Initializer"));
var International_1 = __importDefault(require("./International"));
var Snackbar_1 = __importDefault(require("./Snackbar"));
var Initialized_1 = __importDefault(require("./Initialized"));
var Uninitialized_1 = __importDefault(require("./Uninitialized"));
var Stateful = function (_a) {
    var store = _a.store, children = _a.children;
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(WebSocket_1.default, null, children)));
};
Stateful.Snackbar = Snackbar_1.default;
Stateful.Initializer = Initializer_1.default;
Stateful.International = International_1.default;
Stateful.Initialized = Initialized_1.default;
Stateful.Uninitialized = Uninitialized_1.default;
exports.default = Stateful;
