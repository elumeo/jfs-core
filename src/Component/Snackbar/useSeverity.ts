import { AlertColor } from '@mui/material';
import React from 'react';
import { Toast } from 'Types/Toast';

export const Severity = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
} as const;
export type Severity = AlertColor


const useSeverity = (toast: Toast) => {
  return React.useMemo(() => {
    if (toast?.isSuccess || toast?.variant == 'success') {
      return Severity.success;
    } else if (toast?.isError || toast?.variant == 'error') {
      return Severity.error;
    } else if (toast?.isWarning || toast?.variant == 'warning') {
      return Severity.warning;
    } else if (toast) {
      return Severity.info;
    }
    return null
  }, [toast]);
};

export default useSeverity;
