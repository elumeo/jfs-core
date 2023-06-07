"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var Button_1 = __importDefault(require("./Button"));
var Redux_1 = require("../../Types/Redux");
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Header = function () {
    var username = (0, Redux_1.useSelector)(function (state) { var _a; return (_a = state.Core.Session.sessionDTO) === null || _a === void 0 ? void 0 : _a.username; });
    return ((0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, {}) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: username })] }));
};
exports.default = Header;
