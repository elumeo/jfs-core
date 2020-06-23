const BASE_NAME = 'jfs_';
class Session {
}
Session.storage = window.localStorage;
Session.setToken = (token) => {
    Session.setItem('token', token);
};
Session.getToken = () => {
    return Session.getItem('token');
};
Session.removeToken = () => {
    Session.removeItem('token');
};
Session.getItem = (key) => {
    return Session.storage.getItem(BASE_NAME + key);
};
Session.setItem = (key, value) => {
    Session.storage.setItem(BASE_NAME + key, value);
};
Session.removeItem = (key) => {
    Session.storage.removeItem(BASE_NAME + key);
};
Session.isLoggedIn = () => {
    return Session.getToken() != null && Session.getToken().length > 0;
};
export default Session;
//# sourceMappingURL=Session.js.map