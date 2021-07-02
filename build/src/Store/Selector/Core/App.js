import { createSelector } from 'reselect';
export const appInitialized = createSelector((state) => state.Core.App, state => state.appInitialized);
export const allowRobotLogin = createSelector((state) => state.Core.App, state => state.allowRobotLogin);
export const packageJson = createSelector((state) => state.Core.App, state => state.packageJson);
