import * as React from 'react';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { dismissToastAction } from '../../Store/Action/ToastAction';
import { connect } from 'react-redux';
import International from '../International';
const AppSnackBar = ({ toasts, dismissToastAction }) => (React.createElement(International, null, ({ formatMessage }) => {
    const toastContents = toasts.map(toast => {
        return snackbarContent(toast, formatMessage);
    }).toArray();
    let className = 'appSnackbarNormal';
    if (toasts && toasts.size > 0) {
        if (toasts.first().isError === true) {
            className = 'appSnackbarError';
        }
        if (toasts.first().isSuccess === true) {
            className = 'appSnackbarSuccess';
        }
    }
    return (React.createElement(Snackbar, { id: "appSnackbar", className: className, toasts: toastContents, onDismiss: dismissToastAction, autohide: !(toasts && toasts.size > 0 && toasts.first().dismissLabel), autohideTimeout: toastContents.length > 0
            ? toastContents[0].autohideTimeout
            : Snackbar.defaultProps.autohideTimeout }));
}));
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign(Object.assign({}, state.Core.Toast), state.Core.Session), ownProps));
const enhance = connect(mapStateToProps, { dismissToastAction });
export default enhance(AppSnackBar);
//# sourceMappingURL=Snackbar.js.map