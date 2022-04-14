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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var CircularProgress_1 = __importDefault(require("@material-ui/core/CircularProgress"));
var BaseRoute_1 = __importDefault(require("./BaseRoute"));
var useActions_1 = __importDefault(require("../../Store/useActions"));
var Redux_1 = require("../../Types/Redux");
var AuthRoute = function (props) {
    var enterAuthorizedRoute = (0, useActions_1.default)().enterAuthorizedRoute;
    var _a = (0, Redux_1.useSelector)(function (state) { return ({
        isAuthorized: state.Core.Session.isAuthorized,
        isCheckingSession: state.Core.Session.isCheckingSession,
    }); }), isAuthorized = _a.isAuthorized, isCheckingSession = _a.isCheckingSession;
    (0, react_1.useEffect)(function () {
        enterAuthorizedRoute();
    }, [props.path]);
    return isAuthorized ? (react_1.default.createElement(BaseRoute_1.default, __assign({}, props))) : isCheckingSession ? (react_1.default.createElement(CircularProgress_1.default, { id: 'check-session-progress' })) : (react_1.default.createElement(react_1.default.Fragment, null));
};
exports.default = AuthRoute;
