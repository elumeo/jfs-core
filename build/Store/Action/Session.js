import { createStandardAction } from 'typesafe-actions';
export const loadSession = createStandardAction(`session/LOAD`)();
export const checkSession = createStandardAction('route/CHECK')();
export const logout = (createStandardAction('route/LOGOUT')());
export const authorizeSession = (createStandardAction('route/AUTHORIZE')());
export const unauthorizeSession = (createStandardAction('route/UNAUTHORIZE')());
//# sourceMappingURL=Session.js.map