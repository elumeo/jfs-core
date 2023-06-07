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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var TA = __importStar(require("typesafe-actions"));
var Action = __importStar(require("Store/Action"));
var WSClient_1 = require("API/WS/WSClient");
var lodash_1 = __importDefault(require("lodash"));
var connectSuccess = function (action$, state$) {
    return action$.pipe((0, operators_1.filter)(TA.isActionOf(Action.webSocketConnectSuccessAction)), (0, operators_1.switchMap)(function (action) {
        // Filter configRooms against information in state (hasJoined true/false)
        var configRooms = [];
        var config = state$.value.Core.Configuration.config;
        if (config.JscWebSocketClient !== undefined &&
            action.payload === config.JscWebSocketClient.PrivateNamespace) {
            configRooms =
                config.JscWebSocketClient.AutoRoomSubscriptions === undefined
                    ? []
                    : config.JscWebSocketClient.AutoRoomSubscriptions;
        }
        if (config.JfsWebSocketClient !== undefined && action.payload === config.JfsWebSocketClient.PrivateNamespace) {
            configRooms =
                config.JfsWebSocketClient.AutoRoomSubscriptions === undefined
                    ? []
                    : config.JfsWebSocketClient.AutoRoomSubscriptions;
        }
        var stateJoinedRooms = [];
        var stateLeftRooms = [];
        for (var _i = 0, _a = state$.value.Core.WebSocket[action.payload].rooms; _i < _a.length; _i++) {
            var stateRoom = _a[_i];
            if (stateRoom.shouldJoin) {
                stateJoinedRooms.push(stateRoom.name);
            }
            else {
                stateLeftRooms.push(stateRoom.name);
            }
        }
        var cleanedConfigRooms = [];
        for (var _b = 0, configRooms_1 = configRooms; _b < configRooms_1.length; _b++) {
            var configRoom = configRooms_1[_b];
            var preparedConfigRoom = WSClient_1.WSClient.prepareRoomName(configRoom, state$.value);
            var foundInLeftRoom = false;
            for (var _c = 0, stateLeftRooms_1 = stateLeftRooms; _c < stateLeftRooms_1.length; _c++) {
                var leftRoom = stateLeftRooms_1[_c];
                if (preparedConfigRoom === leftRoom) {
                    foundInLeftRoom = true;
                    break;
                }
            }
            if (foundInLeftRoom === false) {
                cleanedConfigRooms.push(preparedConfigRoom);
            }
        }
        var mergedRooms = lodash_1.default.uniq(__spreadArray(__spreadArray([], cleanedConfigRooms, true), stateJoinedRooms, true));
        var roomActions = [];
        for (var _d = 0, mergedRooms_1 = mergedRooms; _d < mergedRooms_1.length; _d++) {
            var room = mergedRooms_1[_d];
            var roomData = {
                namespace: action.payload,
                room: room
            };
            roomActions.push(Action.webSocketJoinRoomRequestAction(roomData));
        }
        return roomActions;
    }));
};
exports.default = connectSuccess;
