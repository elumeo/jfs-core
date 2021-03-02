import { createStandardAction } from 'typesafe-actions';
export const openLogout = createStandardAction('logout/OPEN')();
export const closeLogout = createStandardAction('logout/CLOSE')();
export const beforeLogoutHookFinished = createStandardAction('logout/BEFORE_LOGOUT_HOOK')();
export const logoutFinished = createStandardAction(`logout/FINISHED`)();
//# sourceMappingURL=LogoutAction.js.map