"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../Types/Redux");
var Indicator_1 = __importDefault(require("./Status/Indicator"));
var JscWebSocketStatus = function () {
    var config = (0, Redux_1.useSelector)(function (state) { return state.Core.Configuration.config; });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Indicator_1.default, { client: config.JscWebSocketClient }),
        react_1.default.createElement(Indicator_1.default, { client: config.JfsWebSocketClient })));
};
exports.default = JscWebSocketStatus;
