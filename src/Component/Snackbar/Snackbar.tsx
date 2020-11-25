import * as React from 'react';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { IToastConfig } from 'Store/Reducer/Core/ToastReducer';
import { List } from 'immutable';
import { useSelector } from 'Types/Redux';
import useActions from 'Action/useActions';
import { InjectedIntlProps, injectIntl } from 'react-intl';

const AppSnackBar: React.FC<InjectedIntlProps> = injectIntl(({ intl }) => {
  if (!intl) {
    return null;
  }
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

  const toastContents = (
    toasts
      .map(toast => snackbarContent(toast, intl))
      .toArray()
  );

  return (
    <Snackbar
      id='appSnackbar'
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
})

export default AppSnackBar;
