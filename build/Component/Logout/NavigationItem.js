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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Navigation = __importStar(require("../Navigation"));
var Redux_1 = require("../../Types/Redux");
var Action_1 = require("../../Store/Action");
var react_redux_1 = require("react-redux");
var NavigationItem = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var robotLoginAvailable = (0, Redux_1.useSelector)(function (state) {
        var _a, _b, _c;
        return state.Core.Configuration.config &&
            ((_a = state.Core.Configuration.config) === null || _a === void 0 ? void 0 : _a.RobotUsername) &&
            ((_b = state.Core.Configuration.config) === null || _b === void 0 ? void 0 : _b.RobotPassword) &&
            ((_c = state.Core.Configuration.config) === null || _c === void 0 ? void 0 : _c.AllowRobotLogin);
    });
    return !robotLoginAvailable ? ((0, jsx_runtime_1.jsx)(Navigation.Item, { iconName: 'exit_to_app', messageId: 'app.logout', authorizedOnly: true, onClick: function () { return dispatch((0, Action_1.openLogout)()); } })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}));
};
exports.default = NavigationItem;
