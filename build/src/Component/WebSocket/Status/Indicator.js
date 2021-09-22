"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../../../Types/Redux");
var Indicator = function (_a) {
    var client = _a.client;
    var isNamespaceConnected = (0, Redux_1.useSelector)(function (state) {
        var _a;
        return Boolean((client === null || client === void 0 ? void 0 : client.PrivateNamespace) &&
            ((_a = state.Core.WebSocket[client === null || client === void 0 ? void 0 : client.PrivateNamespace]) === null || _a === void 0 ? void 0 : _a.isConnected));
    });
    return (react_1.default.createElement("div", { style: { width: 300 } },
        "WS ",
        client.PrivateNamespace,
        " Status:",
        ' ',
        react_1.default.createElement("span", { style: {
                background: isNamespaceConnected ? 'green' : 'red',
                borderRadius: '50%',
                width: 10,
                height: 10,
                display: 'inline-block',
            } })));
};
exports.default = Indicator;
