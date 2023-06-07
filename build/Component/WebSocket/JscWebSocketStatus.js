"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var Redux_1 = require("../../Types/Redux");
var Indicator_1 = __importDefault(require("./Status/Indicator"));
var JscWebSocketStatus = function () {
    var config = (0, Redux_1.useSelector)(function (state) { return state.Core.Configuration.config; });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Indicator_1.default, { client: config.JscWebSocketClient }), (0, jsx_runtime_1.jsx)(Indicator_1.default, { client: config.JfsWebSocketClient })] }));
};
exports.default = JscWebSocketStatus;
