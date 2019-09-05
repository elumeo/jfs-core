import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { IRootReducer } from '../../store/reducer/RootReducer';
import { dismissToastAction } from '../../store/action/BaseAction';
import { compose } from 'redux';
import { connect } from 'react-redux';

export interface IAppSnackbarProps extends InjectedIntlProps {
  toasts?: any;
  dismissToastAction?: any;
}

export interface IAppSnackbarState extends InjectedIntlProps {

}

class AppSnackBar extends React.Component<IAppSnackbarProps, IAppSnackbarState> {

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
            : 3000}
        />
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IAppSnackbarProps) => ({
  ...state.baseReducer,
  ...state.sessionReducer,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { dismissToastAction }, null, {withRef: true}),
  injectIntl
);

export default enhance(AppSnackBar);
