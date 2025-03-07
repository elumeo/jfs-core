import { Agent } from '../../Types/Clippy.type';
export declare const clippySaveAgent: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippySaveAgent", Agent>;
export declare const clippyInit: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyInit", Agent>;
export declare const clippyInitialized: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyInitialized", Agent>;
export declare const clippyDestroy: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyDestroy", void>;
export declare const clippySay: import("typesafe-actions").PayloadMetaActionCreator<"Core/Clippy/clippySay", string, string | void>;
export declare const clippySayQueue: import("typesafe-actions").PayloadMetaActionCreator<"Core/Clippy/clippySayQueue", string[], number>;
export declare const clippyAnimate: import("typesafe-actions").PayloadActionCreator<"Core/Clippy/clippyAnimate", string | void>;
