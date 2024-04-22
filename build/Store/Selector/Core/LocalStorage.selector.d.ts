export declare const pickState: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("../../Reducer/Core/LocalStorage.reducer").State) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core").State) => import("../../Reducer/Core/LocalStorage.reducer").State, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
