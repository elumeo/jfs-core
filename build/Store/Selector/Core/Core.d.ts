export declare const Core: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => import("../../Reducer/Core").State) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Global").State) => import("../../Reducer/Core").State & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
