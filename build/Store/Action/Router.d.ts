import { Location, HashHistory } from 'history';
export { push, back, replace, forward } from '@lagunovsky/redux-react-router';
export declare type RouteDetails = {
    location: Location;
    params: Record<string, string>;
};
export declare const enterAuthorizedRoute: import("typesafe-actions").EmptyActionCreator<"route/ENTER_AUTHORIZED">;
export declare const enterUnauthorizedRoute: import("typesafe-actions").EmptyActionCreator<"route/ENTER_UNAUTHORIZED">;
export declare const customRoutingTest: import("typesafe-actions").PayloadMetaActionCreator<"route/customRoutingTest", string, HashHistory>;
