export declare const pickState: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("../../Reducer/Core/Session").State) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core").State) => import("../../Reducer/Core/Session").State, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isAuthorized: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/Session").State) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isCheckingSession: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/Session").State) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
