import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import IRootReducer from '../../store/reducer/RootReducer';
import { dismissToastAction } from '../../store/action/ToastAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { IToastConfig } from "../../store/reducer/ToastReducer";
import { List } from "immutable";

export interface IAppSnackbarProps extends InjectedIntlProps {
  toasts?: List<IToastConfig>;
  dismissToastAction?: any;
}

class AppSnackBar extends React.Component<IAppSnackbarProps> {

  render() {
    const {
      props: { intl: { formatMessage }, toasts, dismissToastAction }
    } = this;

    const toastContents = toasts.map(toast => {
      return snackbarContent(toast, formatMessage);
    }).toArray();

    return (
      <Snackbar
          id="appSnackbar"
          className={
            (toasts && toasts.size > 0) && (toasts.first().isError === true)
              ? 'appSnackbarError'
              : 'appSnackbarNormal'
          }
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
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IAppSnackbarProps) => ({
  ...state.toastReducer,
  ...state.sessionReducer,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { dismissToastAction }, null, {withRef: true}),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(AppSnackBar);
