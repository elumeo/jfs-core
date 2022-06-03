/// <reference types="connected-react-router" />
export declare const appInitialized: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const allowRobotLogin: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const packageJson: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
}) => {
    version?: string;
}) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/App").State) => {
    version?: string;
} & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
