import * as Session from './Session';
export const setToken = (token) => {
    Session.setItem('token', token);
};
export const getToken = () => {
    return Session.getItem('token');
};
export const removeToken = () => {
    Session.removeItem('token');
};
export const isLoggedIn = () => {
    return getToken() != null && getToken().length > 0;
};
//# sourceMappingURL=Token.js.map