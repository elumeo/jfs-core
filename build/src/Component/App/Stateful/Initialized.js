"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useSelector_1 = __importDefault(require("../../../../Store/useSelector"));
var Initialized = function (_a) {
    var children = _a.children;
    var initialized = (0, useSelector_1.default)(function (state) { return state.Core.App.appInitialized; });
    return (initialized &&
        react_1.default.createElement(react_1.default.Fragment, null, children));
};
exports.default = Initialized;
