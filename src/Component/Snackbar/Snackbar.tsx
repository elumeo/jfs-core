import * as React from 'react';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { IToastConfig } from 'Store/Reducer/Core/ToastReducer';
import { List } from 'immutable';
import International from 'Component/International';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';

const AppSnackBar: React.FC = () => {
  const { dismissToastAction } = useActions();
  const toasts = useSelector<List<IToastConfig>>(state => (
    state.Core.Toast.toasts
  ));
  let className = 'appSnackbarNormal';
  if (toasts && toasts.size > 0) {
    if (toasts.first().isError === true) {
      className = 'appSnackbarError';
    }
    if (toasts.first().isSuccess === true) {
      className = 'appSnackbarSuccess';
    }
  }
  return (
    <International>
      {({ formatMessage }) => {
        const toastContents = (
          toasts
            .map(toast => snackbarContent(toast, formatMessage))
            .toArray()
        );
        return (
          <Snackbar
            id="appSnackbar"
            className={className}
            toasts={toastContents}
            onDismiss={dismissToastAction}
            autohide={
              !(toasts && toasts.size > 0 && toasts.first().dismissLabel)
            }
            autohideTimeout={toastContents.length > 0
              ? toastContents[0].autohideTimeout
              : Snackbar.defaultProps.autohideTimeout}
          />
        )
      }}
    </International>
  )
}

export default AppSnackBar;
