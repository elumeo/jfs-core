import React from 'react';
import * as MUI from '@material-ui/core';
import * as LAB from '@material-ui/lab';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/useActions';
import { useIntl } from 'react-intl';
import Failure from './Failure';
import * as Format from '../../Utilities/Format';
const DEFAULT_AUTO_HIDE_DURATION = 1000;
const READ_TIME_WORDS_PER_MILLISECOND = 0.00375;
const READ_TIME_MILLISECONDS_PER_WORD = 1 / READ_TIME_WORDS_PER_MILLISECOND;
const severity = (toast) => {
    if (toast.isError) {
        return 'error';
    }
    else if (toast.isSuccess) {
        return 'success';
    }
    else {
        return 'info';
    }
};
const Snackbar = () => {
    const intl = useIntl();
    const { dismissToastAction } = useActions();
    const toasts = useSelector(state => state.Core.Toast.toasts);
    const [toast, setToast] = React.useState(null);
    const [message, setMessage] = React.useState('');
    const [autoHideDuration, setAutoHideDuration] = React.useState(DEFAULT_AUTO_HIDE_DURATION);
    React.useEffect(() => {
        if (toasts.length) {
            setToast(toasts[0]);
        }
    }, [toasts.length]);
    React.useEffect(() => {
        if (toast === null || toast === void 0 ? void 0 : toast.contentMessage) {
            setMessage(toast.contentMessage);
            const words = toast.contentMessage.split(' ');
            setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
        }
        else if (toast === null || toast === void 0 ? void 0 : toast.contentTranslationId) {
            const next = intl.formatMessage({ id: toast.contentTranslationId }, toast.contentTranslationValues || {});
            setMessage(next);
            const words = next.split(' ');
            setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
        }
        else if ((toast === null || toast === void 0 ? void 0 : toast.contentError) && (toast === null || toast === void 0 ? void 0 : toast.contentError) instanceof Error) {
            const { title, details } = Format.Error.apply(toast.contentError);
            setMessage(React.createElement(Failure, { title: title, details: details }));
            const words = [...title.split(' '), ...details.split(' ')];
            setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
        }
    }, [JSON.stringify(toast)]);
    return (React.createElement(MUI.Snackbar, { autoHideDuration: autoHideDuration, onClose: () => dismissToastAction() },
        React.createElement(LAB.Alert, { severity: severity(toast) }, message)));
};
export default Snackbar;
