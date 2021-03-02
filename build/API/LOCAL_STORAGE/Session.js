const BASE_NAME = 'jfs_';
export const getItem = (key) => {
    return window.localStorage.getItem(BASE_NAME + key);
};
export const setItem = (key, value) => {
    window.localStorage.setItem(BASE_NAME + key, value);
};
export const removeItem = (key) => {
    window.localStorage.removeItem(BASE_NAME + key);
};
//# sourceMappingURL=Session.js.map