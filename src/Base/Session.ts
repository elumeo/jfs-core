const BASE_NAME = 'jfs_';

class Session {
  private static storage: Storage = window.localStorage;

  public static setToken = (token?: string): void => {
    Session.setItem('token', token);
  };

  public static getToken = (): string => {
    return Session.getItem('token');
  };

  public static removeToken = (): void => {
    Session.removeItem('token');
  };

  public static getItem = (key: string): string => {
    return Session.storage.getItem(BASE_NAME + key);
  };

  public static setItem = (key: string, value: string): void => {
    Session.storage.setItem(BASE_NAME + key, value);
  };

  public static removeItem = (key: string): void => {
    Session.storage.removeItem(BASE_NAME + key);
  };

  public static isLoggedIn = (): boolean => {
    return Session.getToken() != null && Session.getToken().length > 0;
  };
}

export default Session;
