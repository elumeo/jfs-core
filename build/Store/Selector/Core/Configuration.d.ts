/// <reference types="connected-react-router" />
export declare const Configuration: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
} & Record<string, unknown>) => import("../../../Types/Configuration").Configuration) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core").State) => import("../../../Types/Configuration").Configuration & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const DebugMode: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").Configuration) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const DebugCallstackLimit: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
} & Record<string, unknown>) => number) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").Configuration) => number & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
