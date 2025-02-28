export type Toast = {
    contentMessage?: string | null;
    contentTranslationId?: string | null;
    contentTranslationValues?: {};
    contentError?: any | null;
    isError?: boolean;
    isWarning?: boolean;
    isSuccess?: boolean;
    variant?: 'error' | 'warning' | 'success' | 'info';
    dismissLabel?: string | null;
    [messageParameters: string]: any;
};
