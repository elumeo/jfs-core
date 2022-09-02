export declare const appInitialized: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("@lagunovsky/redux-react-router").ReduxRouterState;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const allowRobotLogin: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("@lagunovsky/redux-react-router").ReduxRouterState;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const packageJson: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("@lagunovsky/redux-react-router").ReduxRouterState;
}) => {
    version?: string;
}) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => {
    version?: string;
} & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
