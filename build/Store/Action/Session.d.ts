import JSCApi from '../../API/JSC';
declare type IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
declare type ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
export declare const loadSession: import("typesafe-actions").EmptyActionCreator<"session/LOAD">;
export declare const checkSession: import("typesafe-actions").EmptyActionCreator<"route/CHECK">;
export declare namespace logout {
    type Payload = {
        sessionDTO?: ISessionDTO;
    };
}
export declare const logout: import("typesafe-actions").PayloadActionCreator<"route/LOGOUT", logout.Payload>;
export declare namespace authorizeSession {
    type Payload = {
        frontendSessionDTO: IFrontendSessionDTO;
    };
}
export declare const authorizeSession: import("typesafe-actions").PayloadActionCreator<"route/AUTHORIZE", authorizeSession.Payload>;
export declare const unauthorizeSession: import("typesafe-actions").EmptyActionCreator<"route/UNAUTHORIZE">;
export {};
