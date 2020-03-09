import * as React from 'react';
import Snackbar from 'react-md/lib/Snackbars';
import snackbarContent from './SnackBarContent';
import { ICoreRootReducer } from '../../Store/Reducer';
import { dismissToastAction } from '../../Store/Action/ToastAction';
import { connect } from 'react-redux';
import { IToastConfig } from '../../Store/Reducer/ToastReducer';
import { List } from 'immutable';
import International from '../International';

export interface IAppSnackbarProps {
  toasts?: List<IToastConfig>;
  dismissToastAction?: typeof dismissToastAction;
}

const AppSnackBar: React.FC<IAppSnackbarProps> = ({
  toasts,
  dismissToastAction
}) => (
  <International>
    {({ formatMessage }) => {

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
    }}
  </International>
)

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: IAppSnackbarProps
) => ({
  ...state.toastReducer,
  ...state.sessionReducer,
  ...ownProps
});

const enhance = connect(mapStateToProps, {dismissToastAction});

export default enhance(AppSnackBar);
