import * as React from 'react';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { useSelector } from '../../Types/Redux';
import useActions from '../../Store/Action/useActions';
import { injectIntl } from 'react-intl';
const AppSnackBar = injectIntl(({ intl }) => {
    if (!intl) {
        return null;
    }
    const { dismissToastAction } = useActions();
    const toasts = useSelector(state => (state.Core.Toast.toasts));
    let className = 'appSnackbarNormal';
    if (toasts && toasts.size > 0) {
        if (toasts.first().isError === true) {
            className = 'appSnackbarError';
        }
        if (toasts.first().isSuccess === true) {
            className = 'appSnackbarSuccess';
        }
    }
    const toastContents = (toasts
        .map(toast => snackbarContent(toast, intl))
        .toArray());
    return (React.createElement(Snackbar, { id: 'appSnackbar', className: className, toasts: toastContents, onDismiss: dismissToastAction, autohide: !(toasts && toasts.size > 0 && toasts.first().dismissLabel), autohideTimeout: toastContents.length > 0
            ? toastContents[0].autohideTimeout
            : Snackbar.defaultProps.autohideTimeout }));
});
export default AppSnackBar;
//# sourceMappingURL=Snackbar.js.map