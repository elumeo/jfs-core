import React from 'react';
import { Color } from '@material-ui/lab';
import { Toast } from 'Types/Toast';

const useSeverity = (toast: Toast): Color => {
  const [severity, setSeverity] = React.useState<Color>('info');

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
