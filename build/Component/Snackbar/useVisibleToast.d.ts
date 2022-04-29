import React from 'react';
import { Toast } from '../../Types/Toast';
import { AlertColor } from '@mui/material';
declare const useVisibleToast: () => {
    toast: Toast;
    open: boolean;
    words: string[];
    message: React.ReactNode;
    autoHideDuration: number;
    severity: AlertColor;
};
export default useVisibleToast;
