export declare const Core: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
} & Record<string, unknown>) => import("../../Reducer/Core").State) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Global").State) => import("../../Reducer/Core").State & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
