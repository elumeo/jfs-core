import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { ICoreRootReducer } from '../../store/reducer/combineReducers';
import { dismissToastAction } from '../../store/action/ToastAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { IToastConfig } from '../../store/reducer/ToastReducer';
import { List } from 'immutable';

export interface IAppSnackbarProps extends InjectedIntlProps {
  toasts?: List<IToastConfig>;
  dismissToastAction?: typeof dismissToastAction;
}

class AppSnackBar extends React.Component<IAppSnackbarProps> {

  render() {
    const {
      props: {intl: {formatMessage}, toasts, dismissToastAction}
    } = this;

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
  }
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IAppSnackbarProps
) => ({
  ...state.toastReducer,
  ...state.sessionReducer,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {dismissToastAction}, null, {withRef: true}),
  injectIntl
);

export default enhance(AppSnackBar);
