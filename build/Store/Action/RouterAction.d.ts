import { PayloadAction } from 'typesafe-actions';
import { Location } from 'history';
export declare type RouteDetails = {
    location: Location;
    params: {};
};
export declare const enterAuthorizedRoute: import("typesafe-actions").EmptyAC<string>;
export declare const enterUnauthorizedRoute: import("typesafe-actions").EmptyAC<string>;
export declare const updateRouteDetails: (details: RouteDetails) => PayloadAction<string, RouteDetails>;
