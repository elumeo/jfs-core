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
var react_1 = __importStar(require("react"));
var CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
var Redux_1 = require("../../Types/Redux");
var Action_1 = require("../../Store/Action");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var AuthRoute = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = (0, Redux_1.useSelector)(function (state) { return ({
        isAuthorized: state.Core.Session.isAuthorized,
        isCheckingSession: state.Core.Session.isCheckingSession,
    }); }), isAuthorized = _b.isAuthorized, isCheckingSession = _b.isCheckingSession;
    (0, react_1.useEffect)(function () {
        dispatch((0, Action_1.enterAuthorizedRoute)());
    }, [dispatch]);
    console.log('authroute', __assign(__assign({ children: children }, rest), { isAuthorized: isAuthorized, isCheckingSession: isCheckingSession }));
    return isCheckingSession
        ? react_1.default.createElement(CircularProgress_1.default, { id: 'check-session-progress' })
        : isAuthorized
            ? react_1.default.createElement(react_1.default.Fragment, null, children)
            : react_1.default.createElement(react_router_1.Navigate, { to: '/' });
    // isAuthorized ? children(
    //   <BaseRoute {...props} />
    // ) : isCheckingSession ? (
    //   <CircularProgress id='check-session-progress' />
    // ) : (
    //   <></>
    // );
};
exports.default = AuthRoute;
