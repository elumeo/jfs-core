export declare const Configuration: ((state: {
    Core: import("../../Reducer/Core").State;
    router: import("connected-react-router").RouterState<unknown>;
}) => import("../../../Types/Configuration").Configuration) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/Configuration").State<import("../../../Types/Configuration").Configuration>) => import("../../../Types/Configuration").Configuration & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
