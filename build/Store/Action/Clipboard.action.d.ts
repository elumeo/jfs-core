export type ClipboardPayload = {
    text: string;
    succcessMessage?: string;
    errorMessage?: string;
};
export declare const copyToClipboard: import("typesafe-actions").PayloadActionCreator<"JFS/CORE/Clipboard/COPY", ClipboardPayload>;
