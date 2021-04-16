export declare const getSessionStateSelector: import("reselect").OutputSelector<import("../../Reducer/Global").State, import("../../Reducer/Core/Session").State, (res: import("../../Reducer/Core").State) => import("../../Reducer/Core/Session").State>;
export declare const getIsAuthorizedSelector: import("reselect").OutputSelector<import("../../Reducer/Global").State, boolean, (res: import("../../Reducer/Core/Session").State) => boolean>;
export declare const getIsCheckingSessionSelector: import("reselect").OutputSelector<import("../../Reducer/Global").State, boolean, (res: import("../../Reducer/Core/Session").State) => boolean>;