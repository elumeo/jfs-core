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
var react_1 = require("react");
var Redux_1 = require("Types/Redux");
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var react_intl_1 = require("react-intl");
var Definition_1 = __importDefault(require("Component/App/Stateless/Style/Theme/Definition"));
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
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, __assign({ title: formatMessage({ id: 'webSocket.room' }) + ': ' + roomName }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, __assign({ disableRipple: true, disableTouchRipple: true, sx: { cursor: 'default' } }, { children: (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                    width: Definition_1.default.spacing(2),
                    height: Definition_1.default.spacing(2),
                    borderRadius: '50%',
                    borderColor: color,
                    bgcolor: color,
                } }) })) })));
};
exports.default = Indicator;
