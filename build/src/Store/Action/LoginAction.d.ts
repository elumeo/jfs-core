export declare const openLoginDialog: import("typesafe-actions").EmptyAC<string>;
export declare const closeLoginDialog: import("typesafe-actions").EmptyAC<string>;
export declare namespace updateCredentials {
    type Payload = {
        username: string;
        password: string;
    };
}
export declare const updateCredentials: import("typesafe-actions").PayloadAC<string, updateCredentials.Payload>;
export declare namespace checkLogin {
    type Payload = {
        username: string;
        password: string;
    };
}
export declare const checkLogin: import("typesafe-actions").PayloadAC<string, checkLogin.Payload>;
export declare const loggedIn: import("typesafe-actions").EmptyAC<string>;
export declare const loginFailed: import("typesafe-actions").EmptyAC<string>;
