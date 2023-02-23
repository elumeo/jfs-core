import { State } from '../../Reducer/Global';
export declare const pickState: (state: State) => import("../../Reducer/Core/WebSocket").State;
export declare const pickJsc2Jfs: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("../../../Types/WebSocket").IWebSocketNamespace) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/WebSocket").State) => import("../../../Types/WebSocket").IWebSocketNamespace & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const pickJfs2Jfs: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => import("../../../Types/WebSocket").IWebSocketNamespace) & import("reselect").OutputSelectorFields<(args_0: import("../../Reducer/Core/WebSocket").State) => import("../../../Types/WebSocket").IWebSocketNamespace & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isJsc2JfsWebSocketConnected: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/WebSocket").IWebSocketNamespace) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const isJfs2JfsWebSocketConnected: ((state: {
    Core: import("../../Reducer/Core").State;
} & Record<string, unknown>) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../../Types/WebSocket").IWebSocketNamespace) => boolean & {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
