import { createSelector } from 'reselect';
import getCoreStateSelector from '../../Selectors';
export const getSessionStateSelector = createSelector(getCoreStateSelector, core => core.Session);
export const getIsAuthorizedSelector = createSelector(getSessionStateSelector, session => session.isAuthorized);
export const getIsCheckingSessionSelector = createSelector(getSessionStateSelector, session => session.isCheckingSession);
//# sourceMappingURL=Session.js.map