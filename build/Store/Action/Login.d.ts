import * as Type from '../../Types/Login';
export declare const openLoginDialog: import("typesafe-actions").EmptyActionCreator<"login/OPEN">;
export declare const closeLoginDialog: import("typesafe-actions").EmptyActionCreator<"login/CLOSE">;
export declare const setPublicKey: import("typesafe-actions").PayloadActionCreator<"login/SET_PUBLIC_KEY", string>;
export declare const checkLogin: import("typesafe-actions").PayloadActionCreator<"login/CHECK", Type.Credentials>;
export declare const loggedIn: import("typesafe-actions").EmptyActionCreator<"login/LOGGED_IN">;
export declare const loginFailed: import("typesafe-actions").EmptyActionCreator<"login/LOGIN_FAILED">;
