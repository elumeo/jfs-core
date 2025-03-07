import { Agent } from '../../../Types/Clippy.type';
export declare const pickClippyEnabled: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickPreferredClippyVariant: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => Agent) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/LocalStorage.reducer").State, args_1: string) => Agent, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickClippyConfigInterval: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => number) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickClippyConfigMessages: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => string[]) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/Configuration").ClippyConfiguration) => string[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
