export type JscError = {
    id: string;
    message: string;
    error?: string;
};
export declare const apply: (error: Error) => {
    title: string;
    details: string;
};
