import { createAction } from "typesafe-actions";

export type ClipboardPayload = {
    text: string;
    succcessMessage?: string;   //translation id
    errorMessage?: string;      //translation id
}
export const copyToClipboard = createAction('JFS/CORE/Clipboard/COPY')<ClipboardPayload>()