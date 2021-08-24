export const isLoginRobotAvailable = (state) => {
    var _a, _b;
    return ((_a = state.Core.Configuration) === null || _a === void 0 ? void 0 : _a.config.RobotUsername) &&
        ((_b = state.Core.Configuration) === null || _b === void 0 ? void 0 : _b.config.RobotPassword) &&
        state.Core.App.allowRobotLogin &&
        !state.Core.Login.failedLogins;
};
export const isLoginOpen = (state) => state.Core.Router.routeType === 'authorized' &&
    !state.Core.Session.isAuthorized &&
    !isLoginRobotAvailable(state) &&
    !state.Core.Session.isCheckingSession;
