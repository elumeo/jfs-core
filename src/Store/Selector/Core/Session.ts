import { createSelector } from 'reselect';
import { Core } from './Core';


export const pickState = createSelector(Core, core => core.Session);

export const isAuthorized = createSelector(pickState, state => state.isAuthorized)
export const isCheckingSession = createSelector(pickState, state => state.isCheckingSession)


