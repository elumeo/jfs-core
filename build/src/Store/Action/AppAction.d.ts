export declare namespace initializeApp {
    type Payload = {
        allowRobotLogin?: boolean;
        packageJson: object;
        ForceHTTPS?: boolean;
        translations: {
            [language: string]: {
                [key: string]: string;
            };
        };
    };
}
export declare const initializeApp: import("typesafe-actions").PayloadAC<string, initializeApp.Payload>;
export declare const appInitialized: import("typesafe-actions").EmptyAC<string>;
