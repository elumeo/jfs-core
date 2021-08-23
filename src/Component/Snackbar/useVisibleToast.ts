import React from 'react';
import { useSelector } from 'Types/Redux';
import { Toast } from 'Types/Toast';
import useWords from './useWords';
import useSeverity from './useSeverity';
import useAutoHideDuration from './useAutoHideDuration';
import useMessage from './useMessage';
import { Color } from '@material-ui/lab';

const useVisibleToast = (): {
  toast: Toast;
  open: boolean;
  words: string[];
  message: React.ReactNode;
  autoHideDuration: number;
  severity: Color
} => {
  const toasts = useSelector(state => state.Core.Toast.toasts);
  const toast = React.useMemo(
    () => toasts?.[0]
    ,
    [toasts]
  );

  const open = Boolean(toast);
  const words = useWords(toast);
  const message = useMessage(toast, words);
  const autoHideDuration = useAutoHideDuration(words);
  const severity = useSeverity(toast);
  return React.useMemo(
    () => ({
      toast,
      open,
      words,
      message,
      autoHideDuration,
      severity
    }),
    [toast, open, words, message, autoHideDuration, severity]
  );
}

export default useVisibleToast;