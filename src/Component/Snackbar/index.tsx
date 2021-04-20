import React from 'react';
import MUISnackbar from '@material-ui/core/Snackbar';
import { useSelector } from 'Types/Redux';
import { Alert, Color } from '@material-ui/lab';
import { Toast } from 'Types/Toast';
import useActions from 'Store/useActions';
import { useIntl } from 'react-intl';
import Failure from './Failure';
import * as Format from 'Utilities/Format';

const DEFAULT_AUTO_HIDE_DURATION = 1000;
const READ_TIME_WORDS_PER_MILLISECOND = 0.00375;
const READ_TIME_MILLISECONDS_PER_WORD = 1 / READ_TIME_WORDS_PER_MILLISECOND;

const severity = (toast: Toast): Color => {
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
  const [toast, setToast] = React.useState<Toast>(null);
  const [message, setMessage] = React.useState<React.ReactNode>('');
  const [autoHideDuration, setAutoHideDuration] = React.useState(DEFAULT_AUTO_HIDE_DURATION);

  React.useEffect(
    () => {
      if (toasts.length) {
        setToast(toasts[0]);
      }
    },
    [toasts.length]
  );

  React.useEffect(
    () => {
      if (toast?.contentMessage) {
        setMessage(toast.contentMessage);
        const words = toast.contentMessage.split(' ');
        setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
      }
      else if (toast?.contentTranslationId) {
        const next = intl.formatMessage(
          { id: toast.contentTranslationId },
          toast.contentTranslationValues || {}
        );
        setMessage(next);
        const words = next.split(' ');
        setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
      }
      else if (toast?.contentError && toast?.contentError instanceof Error) {
        const { title, details } = Format.Error.apply(toast.contentError);
        setMessage(
          <Failure
            title={title}
            details={details}/>
        );

        const words = [...title.split(' '), ...details.split(' ')];
        setAutoHideDuration(words.length * READ_TIME_MILLISECONDS_PER_WORD);
      }
    },
    [JSON.stringify(toast)]
  );

  return (
    <MUISnackbar
      autoHideDuration={autoHideDuration}
      onClose={() => dismissToastAction()}>
      <Alert severity={severity(toast)}>
        {message}
      </Alert>
    </MUISnackbar>
  );
}

export default Snackbar;