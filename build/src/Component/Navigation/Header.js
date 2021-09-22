"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("./Button"));
var Redux_1 = require("../../../Types/Redux");
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var Header = function () {
    var username = (0, Redux_1.useSelector)(function (state) { var _a; return (_a = state.Core.Session.sessionDTO) === null || _a === void 0 ? void 0 : _a.username; });
    return (react_1.default.createElement(ListItem_1.default, null,
        react_1.default.createElement(ListItemIcon_1.default, null,
            react_1.default.createElement(Button_1.default, null)),
        react_1.default.createElement(ListItemText_1.default, { primary: username })));
};
exports.default = Header;
