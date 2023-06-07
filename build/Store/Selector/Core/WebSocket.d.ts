import { State } from 'Store/Reducer/Global';
export declare const pickState: (state: State) => import("../../Reducer/Core/WebSocket").State;
export declare const pickJsc2Jfs: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => import("../../../Types/WebSocket").IWebSocketNamespace) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/WebSocket").State) => import("../../../Types/WebSocket").IWebSocketNamespace & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickJfs2Jfs: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => import("../../../Types/WebSocket").IWebSocketNamespace) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/WebSocket").State) => import("../../../Types/WebSocket").IWebSocketNamespace & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isJsc2JfsWebSocketConnected: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/WebSocket").IWebSocketNamespace) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isJfs2JfsWebSocketConnected: ((state: {
    [x: string]: unknown;
    Core: import("../../Reducer/Core").State;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/WebSocket").IWebSocketNamespace) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
