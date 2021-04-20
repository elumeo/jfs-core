import React from 'react';
import { useSelector } from 'Types/Redux';
import { Toast } from 'Types/Toast';
import useWords from './useWords';
import useSeverity from './useSeverity';
import useAutoHideDuration from './useAutoHideDuration';
import useMessage from './useMessage';

const useVisibleToast = () => {
  const toasts = useSelector(state => state.Core.Toast.toasts);
  const [toast, setToast] = React.useState<Toast>(null);
  React.useEffect(
    () => {
      if (toasts.length) {
        setToast(toasts[0]);
      }
      else {
        setToast(null);
      }
    },
    [toasts.length]
  );

  const open = Boolean(toast);
  const words = useWords(toast);
  const message = useMessage(toast, words);
  const autoHideDuration = useAutoHideDuration(words);
  const severity = useSeverity(toast);
  return {
    toast,
    open,
    words,
    message,
    autoHideDuration,
    severity
  };
}

export default useVisibleToast;