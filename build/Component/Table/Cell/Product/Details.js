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
var material_1 = require("@mui/material");
var Name_1 = __importDefault(require("./Name"));
var Button_1 = __importDefault(require("./Button"));
var sx = {
    justifyContent: 'space-between',
    flexGrow: 1
};
var Details = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.name, name = _c === void 0 ? null : _c, _d = _a.onClick, onClick = _d === void 0 ? null : _d;
    return (0, jsx_runtime_1.jsxs)(material_1.Stack, __assign({ direction: 'column', sx: sx }, { children: [(0, jsx_runtime_1.jsx)(Name_1.default, { name: name }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClick, id: id })] }));
};
exports.default = (0, react_1.memo)(Details);
