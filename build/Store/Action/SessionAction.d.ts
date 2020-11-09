import JSCApi from 'Jsc/Api';
import IFrontendSessionDTO = JSCApi.DTO.Session.IFrontendSessionDTO;
import ISessionDTO = JSCApi.DTO.Session.ISessionDTO;
export declare const loadSession: import("typesafe-actions").EmptyAC<string>;
export declare const checkSession: import("typesafe-actions").EmptyAC<string>;
export declare namespace logout {
    type Payload = {
        sessionDTO?: ISessionDTO;
    };
}
export declare const logout: import("typesafe-actions").PayloadAC<string, logout.Payload>;
export declare namespace authorizeSession {
    type Payload = {
        frontendSessionDTO: IFrontendSessionDTO;
    };
}
export declare const authorizeSession: import("typesafe-actions").PayloadAC<string, authorizeSession.Payload>;
export declare const unauthorizeSession: import("typesafe-actions").EmptyAC<string>;
