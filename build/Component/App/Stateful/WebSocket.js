"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var WSClient_1 = require("../../../API/WS/WSClient");
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var WebSocket = function (_a) {
    var children = _a.children;
    var webSocketUpdateRoomAction = (0, useActions_1.default)().webSocketUpdateRoomAction;
    (0, react_1.useEffect)(function () {
        WSClient_1.WSClient.listenRoomsObservable$.subscribe(function (roomData) {
            return webSocketUpdateRoomAction(roomData);
        });
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = WebSocket;
