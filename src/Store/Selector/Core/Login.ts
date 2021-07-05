import { State } from "Store/Reducer/Global";

export const isLoginRobotAvailable = (state: State) => (
  state.Core.Configuration?.config.RobotUsername &&
  state.Core.Configuration?.config.RobotPassword &&
  state.Core.App.allowRobotLogin &&
  !state.Core.Login.failedLogins
);

export const isLoginOpen = (state: State) => (
  state.Core.Router.routeType === 'authorized' &&
  !state.Core.Session.isAuthorized &&
  !isLoginRobotAvailable(state) &&
  !state.Core.Session.isCheckingSession
)