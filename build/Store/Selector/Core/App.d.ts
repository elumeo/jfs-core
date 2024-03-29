export declare const appInitialized: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const packageJson: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => {
    version?: string;
}) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => {
    version?: string;
}, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
