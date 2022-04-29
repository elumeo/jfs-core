import React from 'react';
import { AlertColor } from '@mui/material';
import { Toast } from 'Types/Toast';

const useSeverity = (toast: Toast): AlertColor => {
  const [severity, setSeverity] = React.useState<AlertColor>('info');

  React.useEffect(() => {
    if (toast && toast.isSuccess) {
      setSeverity('success');
    } else if (toast && toast.isError) {
      setSeverity('error');
    } else if (toast) {
      setSeverity('info');
    }
  }, [!!toast, toast?.isSuccess, toast?.isError]);

  return severity;
};

export default useSeverity;
