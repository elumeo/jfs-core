import React from 'react';
import { useSelector } from '../../Types/Redux';
import useWords from './useWords';
import useSeverity from './useSeverity';
import useAutoHideDuration from './useAutoHideDuration';
import useMessage from './useMessage';
const useVisibleToast = () => {
    const toasts = useSelector(state => state.Core.Toast.toasts);
    const toast = React.useMemo(() => toasts === null || toasts === void 0 ? void 0 : toasts[0], [toasts]);
    const open = Boolean(toast);
    const words = useWords(toast);
    const message = useMessage(toast, words);
    const autoHideDuration = useAutoHideDuration(words);
    const severity = useSeverity(toast);
    return React.useMemo(() => ({
        toast,
        open,
        words,
        message,
        autoHideDuration,
        severity,
    }), [toast, open, words, message, autoHideDuration, severity]);
};
export default useVisibleToast;
