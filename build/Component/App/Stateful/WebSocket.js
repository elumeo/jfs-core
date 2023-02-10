"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var WSClient_1 = require("../../../API/WS/WSClient");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../../Store/Action");
var WebSocket = function (_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    var _b = react_1.default.useState(false), hasSubscribed = _b[0], setHasSubscribed = _b[1];
    react_1.default.useEffect(function () {
        if (!hasSubscribed) {
            var listenRoomsSubscription_1 = WSClient_1.WSClient.listenRoomsObservable$.subscribe(function (roomData) {
                return dispatch((0, Action_1.webSocketUpdateRoomAction)(roomData));
            });
            var connectionErrorSubscription_1 = WSClient_1.WSClient.connectionErrorObservable$.subscribe(function (error) {
                dispatch((0, Action_1.webSocketConnectFailedAction)(error));
            });
            setHasSubscribed(true);
            return function () {
                listenRoomsSubscription_1.unsubscribe();
                connectionErrorSubscription_1.unsubscribe();
            };
        }
        return function () { return undefined; };
    }, [hasSubscribed, dispatch]);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = WebSocket;
