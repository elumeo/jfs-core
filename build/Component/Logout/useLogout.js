"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useActions_1 = __importDefault(require("../../Store/useActions"));
var Redux_1 = require("../../Types/Redux");
var useLogout = function () {
    var _a = (0, useActions_1.default)(), logout = _a.logout, closeLogout = _a.closeLogout;
    var open = (0, Redux_1.useSelector)(function (state) { return state.Core.Logout.logoutOpen; });
    var pending = (0, Redux_1.useSelector)(function (state) { return state.Core.Logout.logoutPending; });
    var _logout = react_1.default.useCallback(function (session) { return logout(session); }, [logout]);
    var _closeLogout = react_1.default.useCallback(function () { return closeLogout(); }, [closeLogout]);
    return {
        open: open,
        pending: pending,
        commit: _logout,
        close: _closeLogout,
    };
};
exports.default = useLogout;
