import IConfig from '../../../Types/Configuration';
export declare const loadConfig: import("typesafe-actions").EmptyAC<"config/LOAD">;
export declare namespace ConfigLoaded {
    type Payload = {
        config: IConfig;
    };
}
export declare const configLoadedAction: import("typesafe-actions").PayloadAC<string, ConfigLoaded.Payload>;
export declare const loadConfigFailed: import("typesafe-actions").EmptyAC<string>;
