"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var useSelector_1 = __importDefault(require("../../../Store/useSelector"));
var Uninitialized = function (_a) {
    var children = _a.children;
    var initialized = (0, useSelector_1.default)(function (state) { return state.Core.App.appInitialized; });
    return (!initialized &&
        (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }));
};
exports.default = Uninitialized;
