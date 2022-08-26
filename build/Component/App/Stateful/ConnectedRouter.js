"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_1 = require("react-router");
var ConnectedRouter = function (_a) {
    var location = _a.location, history = _a.history, children = _a.children;
    var skipHistoryChange = react_1.default.useRef();
    var _b = react_1.default.useState({
        action: history.action,
        location: history.location
    }), state = _b[0], setState = _b[1];
    var onLocationChanged = function (location, action) {
        setState({ action: action, location: location });
    };
    (0, react_1.useEffect)(function () {
        var _a, _b;
        var listener = history.listen(function (nextState) {
            if (skipHistoryChange.current === true) {
                skipHistoryChange.current = false;
                return;
            }
            onLocationChanged(nextState.location, nextState.action);
        });
        if (((_a = history.location) === null || _a === void 0 ? void 0 : _a.pathname) !== ((_b = state.location) === null || _b === void 0 ? void 0 : _b.pathname)) {
            onLocationChanged(history.location, history.action);
        }
        return listener;
    }, [history, state]);
    (0, react_1.useEffect)(function () {
        if (skipHistoryChange.current === undefined) {
            skipHistoryChange.current = false;
        }
        else if (history.location !== state.location) {
            skipHistoryChange.current = true;
            history.replace(state.location);
        }
    }, [state]);
    return react_1.default.createElement(react_router_1.Router, { location: state.location, navigationType: state.action, navigator: history }, children);
};
exports.default = ConnectedRouter;
