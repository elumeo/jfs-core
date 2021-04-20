import React from 'react';
import { Color } from '@material-ui/lab';
import { Toast } from 'Types/Toast';

const useSeverity = (toast: Toast) => {
  const [severity, setSeverity] = React.useState<Color>('info');

  React.useEffect(
    () => {
      if (toast?.isSuccess) {
        setSeverity('success');
      }
      else if (toast?.isError) {
        setSeverity('error')
      }
      else {
        setSeverity('info')
      }
    },
    [JSON.stringify(toast)]
  );

  return severity;
};

export default useSeverity;