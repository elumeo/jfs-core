"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoginOpen = exports.isLoginRobotAvailable = void 0;
var isLoginRobotAvailable = function (state) {
    var _a, _b, _c, _d, _e, _f;
    return ((_b = (_a = state.Core.Configuration) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.RobotUsername) &&
        ((_d = (_c = state.Core.Configuration) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.RobotPassword) &&
        ((_f = (_e = state.Core.Configuration) === null || _e === void 0 ? void 0 : _e.config) === null || _f === void 0 ? void 0 : _f.AllowRobotLogin) &&
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
