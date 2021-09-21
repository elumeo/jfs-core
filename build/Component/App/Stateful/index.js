"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_redux_1 = require("react-redux");
var WebSocket_1 = __importDefault(require("./WebSocket"));
var Router_1 = __importDefault(require("./Router"));
var Initialized_1 = __importDefault(require("./Initialized"));
var International_1 = __importDefault(require("./International"));
var Snackbar_1 = __importDefault(require("./Snackbar"));
var Stateful = function (_a) {
    var store = _a.store, translations = _a.translations, allowRobotLogin = _a.allowRobotLogin, packageJSON = _a.packageJSON, children = _a.children;
    return (react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(WebSocket_1.default, null,
            react_1.default.createElement(Router_1.default, null,
                react_1.default.createElement(Initialized_1.default, { allowRobotLogin: allowRobotLogin, packageJSON: packageJSON, translations: translations },
                    react_1.default.createElement(International_1.default, { translations: translations },
                        react_1.default.createElement(Snackbar_1.default, null, children)))))));
};
exports.default = Stateful;
