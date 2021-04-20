import React from 'react';
import { Toast } from '../../Types/Toast';
declare const useVisibleToast: () => {
    toast: Toast;
    open: boolean;
    words: string[];
    message: React.ReactNode;
    autoHideDuration: number;
    severity: import("@material-ui/lab").Color;
};
export default useVisibleToast;
