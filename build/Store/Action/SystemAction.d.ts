export declare namespace regionLoaded {
    type Payload = {
        regionName: string;
    };
}
export declare const regionLoaded: import("typesafe-actions").PayloadAC<string, regionLoaded.Payload>;
export declare const getRegionFailed: import("typesafe-actions").EmptyAC<string>;
