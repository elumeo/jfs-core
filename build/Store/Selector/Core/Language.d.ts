export declare const translationLanguage: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("../../../Types/Language").Language) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/Language").State) => import("../../../Types/Language").Language & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const translations: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => Record<string, Record<string, string>>) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/Language").State) => Record<string, Record<string, string>> & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
