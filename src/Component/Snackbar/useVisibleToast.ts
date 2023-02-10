import React from 'react';
import { useSelector } from 'Types/Redux';
import { Toast } from 'Types/Toast';
import useWords from './useWords';
import useSeverity, { Severity } from './useSeverity';
import useAutoHideDuration from './useAutoHideDuration';
import useMessage from './useMessage';

const useVisibleToast = (): {
  toast: Toast;
  open: boolean;
  words: string[];
  message: React.ReactNode;
  autoHideDuration: number;
  severity: Severity;
} => {
  const toasts = useSelector(state => state.Core.Toast.toasts);
  const toast = React.useMemo(() => toasts?.[0], [toasts]);

  const open = Boolean(toast);
  const words = useWords(toast);
  const message = useMessage(toast, words);
  const autoHideDuration = useAutoHideDuration(words);
  const severity = useSeverity(toast);
  return ({
    toast,
    open,
    words,
    message,
    autoHideDuration,
    severity,
  })
};

export default useVisibleToast;
