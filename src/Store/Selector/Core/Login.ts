import { State } from 'Store/Reducer/Global';

export const isLoginRobotAvailable = (state: State): boolean =>
  state.Core.Configuration?.config?.RobotUsername &&
  state.Core.Configuration?.config?.RobotPassword &&
  state.Core.Configuration?.config?.AllowRobotLogin &&
  !state.Core.Login.failedLogins;

export const isLoginOpen = (state: State): boolean =>
  state.Core.Router.routeType === 'authorized' &&
  !state.Core.Session.isAuthorized &&
  !isLoginRobotAvailable(state) &&
  !state.Core.Session.isCheckingSession;
