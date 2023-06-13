import * as TA from 'typesafe-actions';
export declare const initializeApp: TA.PayloadActionCreator<"app/INITIALZE", {
    packageJson: Record<string, unknown>;
    ForceHTTPS?: boolean;
    translations: Record<string, Record<string, string>>;
}>;
export declare const appInitialized: TA.EmptyActionCreator<"app/INITIALZED">;
