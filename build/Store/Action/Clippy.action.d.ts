export declare const clippySaveAgent: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippySaveAgent", import("clippyts/dist/types").AgentType>;
export declare const clippyInit: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyInit", import("clippyts/dist/types").AgentType>;
export declare const clippyInitialized: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyInitialized", import("clippyts/dist/types").AgentType>;
export declare const clippyDestroy: import("typesafe-actions").EmptyActionCreator<"Core/Clippy/clippyDestroy">;
export declare const clippyShow: import("typesafe-actions").EmptyActionCreator<"Core/Clippy/clippyShow">;
export declare const clippyHide: import("typesafe-actions").EmptyActionCreator<"Core/Clippy/clippyHide">;
export declare const clippySay: import("typesafe-actions").PayloadMetaActionCreator<"Core/Clippy/clippySay", string, string | void>;
export declare const clippySayQueue: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippySayQueue", string[]>;
export declare const clippyAnimate: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyAnimate", string | void>;
