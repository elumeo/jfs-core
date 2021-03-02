import * as Session from './Session'
export const setToken = (token?: string): void => {
    Session.setItem('token', token);
  };

export const getToken = (): string => {
    return Session.getItem('token');
  };

export const removeToken = (): void => {
    Session.removeItem('token');
  };
export const isLoggedIn = (): boolean => {
  return getToken() != null && getToken().length > 0;
};