import { Location } from 'history';
export declare type RouteDetails = {
    location: Location;
    params: Record<string, string>;
};
export declare const enterAuthorizedRoute: import("typesafe-actions").EmptyActionCreator<"route/ENTER_AUTHORIZED">;
export declare const enterUnauthorizedRoute: import("typesafe-actions").EmptyActionCreator<"route/ENTER_UNAUTHORIZED">;
export declare const updateRouteDetails: import("typesafe-actions").PayloadActionCreator<"route/UPDATE", RouteDetails>;
