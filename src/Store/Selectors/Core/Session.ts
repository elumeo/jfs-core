import { createSelector } from 'reselect';
import getCoreStateSelector from 'Store/Selectors/index';



export const getSessionStateSelector = createSelector(getCoreStateSelector, core => core.Session)
export const getIsAuthorizedSelector = createSelector(getSessionStateSelector, session => session.isAuthorized)
export const getIsCheckingSessionSelector = createSelector(getSessionStateSelector, session => session.isCheckingSession)
