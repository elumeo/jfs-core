export declare const Configuration: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => import("../../../Types/Configuration").Configuration) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core").State) => import("../../../Types/Configuration").Configuration & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const DebugMode: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").Configuration) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const DebugCallstackLimit: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => number) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").Configuration) => number & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
