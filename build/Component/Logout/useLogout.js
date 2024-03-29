"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../Types/Redux");
var Action_1 = require("../../Store/Action");
var useLogout = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var open = (0, Redux_1.useSelector)(function (state) { return state.Core.Logout.logoutOpen; });
    var pending = (0, Redux_1.useSelector)(function (state) { return state.Core.Logout.logoutPending; });
    var _logout = react_1.default.useCallback(function (session) { return dispatch((0, Action_1.logout)(session)); }, [dispatch]);
    var _closeLogout = react_1.default.useCallback(function () { return dispatch((0, Action_1.closeLogout)()); }, [dispatch]);
    return {
        open: open,
        pending: pending,
        commit: _logout,
        close: _closeLogout,
    };
};
exports.default = useLogout;
