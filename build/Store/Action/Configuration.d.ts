import { Configuration } from '../../Types/Configuration';
export declare const loadConfig: import("typesafe-actions").EmptyActionCreator<"config/LOAD">;
export declare const configLoadedAction: import("typesafe-actions").PayloadActionCreator<"config/LOADED", {
    config: Configuration;
}>;
export declare const loadConfigFailed: import("typesafe-actions").EmptyActionCreator<"config/LOAD_FAILED">;
