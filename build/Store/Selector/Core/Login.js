"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoginOpen = exports.isLoginRobotAvailable = void 0;
var isLoginRobotAvailable = function (state) {
    var _a, _b;
    return ((_a = state.Core.Configuration) === null || _a === void 0 ? void 0 : _a.config.RobotUsername) &&
        ((_b = state.Core.Configuration) === null || _b === void 0 ? void 0 : _b.config.RobotPassword) &&
        state.Core.App.allowRobotLogin &&
        !state.Core.Login.failedLogins;
};
exports.isLoginRobotAvailable = isLoginRobotAvailable;
var isLoginOpen = function (state) {
    return state.Core.Router.routeType === 'authorized' &&
        !state.Core.Session.isAuthorized &&
        !(0, exports.isLoginRobotAvailable)(state) &&
        !state.Core.Session.isCheckingSession;
};
exports.isLoginOpen = isLoginOpen;
