import React from 'react';
import { Toast } from '../../../Types/Toast';
import { Color } from '@material-ui/lab';
declare const useVisibleToast: () => {
    toast: Toast;
    open: boolean;
    words: string[];
    message: React.ReactNode;
    autoHideDuration: number;
    severity: Color;
};
export default useVisibleToast;
