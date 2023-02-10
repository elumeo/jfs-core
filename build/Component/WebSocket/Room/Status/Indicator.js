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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Redux_1 = require("../../../../Types/Redux");
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var react_intl_1 = require("react-intl");
var Definition_1 = __importDefault(require("../../../App/Stateless/Style/Theme/Definition"));
var Indicator = function (_a) {
    var client = _a.client, roomName = _a.roomName;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var isRoomJoined = (0, Redux_1.useSelector)(function (state) {
        var _a, _b, _c;
        return Boolean((client === null || client === void 0 ? void 0 : client.PrivateNamespace)
            && ((_a = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _a === void 0 ? void 0 : _a.isConnected)
            && ((_c = (_b = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _b === void 0 ? void 0 : _b.rooms.find(function (room) { return room.name === roomName; })) === null || _c === void 0 ? void 0 : _c.hasJoined));
    });
    var isRoomJoining = (0, Redux_1.useSelector)(function (state) {
        var _a, _b, _c;
        return Boolean((client === null || client === void 0 ? void 0 : client.PrivateNamespace)
            && ((_a = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _a === void 0 ? void 0 : _a.isConnected)
            && ((_c = (_b = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _b === void 0 ? void 0 : _b.rooms.find(function (room) { return room.name === roomName; })) === null || _c === void 0 ? void 0 : _c.isJoining));
    });
    var color = (0, react_1.useMemo)(function () { return isRoomJoined ? colors_1.green[500] : isRoomJoining ? colors_1.yellow[500] : colors_1.red[500]; }, [isRoomJoined]);
    return (react_1.default.createElement(material_1.Tooltip, { title: formatMessage({ id: 'webSocket.room' }) + ': ' + roomName },
        react_1.default.createElement(material_1.IconButton, { disableRipple: true, disableTouchRipple: true, sx: { cursor: 'default' } },
            react_1.default.createElement(material_1.Box, { sx: {
                    width: Definition_1.default.spacing(2),
                    height: Definition_1.default.spacing(2),
                    borderRadius: '50%',
                    borderColor: color,
                    bgcolor: color,
                } }))));
};
exports.default = Indicator;
