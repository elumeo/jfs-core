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
export declare const initializeApp: import("typesafe-actions").PayloadActionCreator<"app/INITIALZE", initializeApp.Payload>;
export declare const appInitialized: import("typesafe-actions").EmptyActionCreator<"app/INITIALZED">;
