import { AlertColor } from '@mui/material';
import React from 'react';
import { Toast } from 'Types/Toast';
export const Severity = {
  success: 'success',
  error: 'error',
  info: 'info',
} as const;
export type Severity = AlertColor


const useSeverity = (toast: Toast) => {
  const color = React.useMemo(() => {
    if (toast && toast.isSuccess) {
      return Severity.success;
    } else if (toast && toast.isError) {
      return Severity.error;
    } else if (toast) {
      return Severity.info;
    }
    return null
  }, [toast]);

  return color;
};

export default useSeverity;
