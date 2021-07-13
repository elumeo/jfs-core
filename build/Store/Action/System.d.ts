export declare namespace regionLoaded {
    type Payload = {
        regionName: string;
    };
}
export declare const regionLoaded: import("typesafe-actions").PayloadActionCreator<"region/LOADED", regionLoaded.Payload>;
export declare const getRegionFailed: import("typesafe-actions").EmptyActionCreator<"region/GET_FAILED">;
