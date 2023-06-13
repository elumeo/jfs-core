import React from 'react';
import { Toast } from 'Types/Toast';
import { Severity } from './useSeverity';
declare const useVisibleToast: () => {
    toast: Toast;
    open: boolean;
    words: string[];
    message: React.ReactNode;
    autoHideDuration: number;
    severity: Severity;
};
export default useVisibleToast;
