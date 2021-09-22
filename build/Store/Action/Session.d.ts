import JSCApi from '../../API/JSC';
declare type IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
declare type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
export declare const loadSession: import("typesafe-actions").EmptyActionCreator<"session/LOAD">;
export declare const checkSession: import("typesafe-actions").EmptyActionCreator<"route/CHECK">;
export declare const logout: import("typesafe-actions").PayloadActionCreator<"route/LOGOUT", {
    sessionDTO?: ISessionDTO;
}>;
export declare const authorizeSession: import("typesafe-actions").PayloadActionCreator<"route/AUTHORIZE", {
    frontendSessionDTO: IFrontendSessionDTO;
}>;
export declare const unauthorizeSession: import("typesafe-actions").EmptyActionCreator<"route/UNAUTHORIZE">;
export {};
