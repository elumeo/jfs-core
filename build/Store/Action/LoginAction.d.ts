export declare const openLoginDialog: import("typesafe-actions").EmptyAC<"login/OPEN">;
export declare const closeLoginDialog: import("typesafe-actions").EmptyAC<"login/CLOSE">;
export declare namespace updateCredentials {
    type Payload = {
        username: string;
        password: string;
    };
}
export declare const updateCredentials: import("typesafe-actions").PayloadAC<"login/UPDATE_CREDENTIALS", updateCredentials.Payload>;
export declare namespace checkLogin {
    type Payload = {
        username: string;
        password: string;
    };
}
export declare const checkLogin: import("typesafe-actions").PayloadAC<"login/CHECK", checkLogin.Payload>;
export declare const loggedIn: import("typesafe-actions").EmptyAC<"login/LOGGED_IN">;
export declare const loginFailed: import("typesafe-actions").EmptyAC<"login/LOGIN_FAILED">;
