export type Toast = {
    contentMessage?: string | null;
    contentTranslationId?: string | null;
    contentTranslationValues?: {};
    contentError?: any | null;
    isError?: boolean;
    isSuccess?: boolean;
    dismissLabel?: string | null;
    [messageParameters: string]: any;
};
