declare class Session {
    private static storage;
    static setToken: (token?: string) => void;
    static getToken: () => string;
    static removeToken: () => void;
    static getItem: (key: string) => string;
    static setItem: (key: string, value: string) => void;
    static removeItem: (key: string) => void;
    static isLoggedIn: () => boolean;
}
export default Session;
