"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_1 = __importDefault(require("react"));
var WSClient_1 = require("API/WS/WSClient");
var react_redux_1 = require("react-redux");
var Action_1 = require("Store/Action");
var WebSocket = function (_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    var subscription = react_1.default.useRef(null);
    var errors = react_1.default.useRef(null);
    react_1.default.useEffect(function () {
        if (!subscription.current) {
            subscription.current = WSClient_1.WSClient.listenRoomsObservable$.subscribe(function (roomData) { return dispatch((0, Action_1.webSocketUpdateRoomAction)(roomData)); });
        }
        if (!errors.current) {
            errors.current = WSClient_1.WSClient.connectionErrorObservable$.subscribe(function (error) { return dispatch((0, Action_1.webSocketConnectFailedAction)(error)); });
        }
        return function () {
            if (subscription.current) {
                subscription.current.unsubscribe();
            }
            if (errors.current) {
                errors.current.unsubscribe();
            }
        };
    }, [dispatch]);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
};
exports.default = WebSocket;
