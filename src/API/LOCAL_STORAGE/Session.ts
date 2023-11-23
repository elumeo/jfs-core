export const BASE_NAME = 'jfs_';

export const getItem = (key: string): string => {
  return window.localStorage.getItem(BASE_NAME + key);
};

export const setItem = (key: string, value: string): void => {
  window.localStorage.setItem(BASE_NAME + key, value);
};

export const removeItem = (key: string): void => {
  window.localStorage.removeItem(BASE_NAME + key);
};
