export declare const pickClippyEnabled: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickClippyVariant: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("clippyts/dist/types").AgentType) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/LocalStorage.reducer").State, args_1: string) => import("clippyts/dist/types").AgentType, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickClippyInterval: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => number) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickConfigMessages: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => string[]) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => string[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
