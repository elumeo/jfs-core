import * as _ from 'lodash';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import Button from 'react-md/lib/Buttons';
import Snackbar from 'react-md/lib/Snackbars';
import Toolbar from 'react-md/lib/Toolbars';
import NavigationDrawer from './NavigationDrawer';
import { dismissToastAction } from '../../store/action/BaseAction';
import { IRootReducer } from '../../../../../../src/store/reducer/Root';
import { IBaseReducerState, IToastConfig } from '../../store/reducer/BaseReducer';
import config from '../../base/Config';

// https://en.wikipedia.org/wiki/Speed_reading
const AVERAGE_READING_WORDS_PER_MINUTE = 200;
const AVERAGE_READING_WORDS_PER_SECOND = AVERAGE_READING_WORDS_PER_MINUTE / 60;

// props & state ---------------------------------------------------------------
interface IAppContainerProps extends InjectedIntlProps, IBaseReducerState {
  dismissToastAction?: () => void;
}

interface IAppContainerState {
  visible?: boolean;
}

// component -------------------------------------------------------------------
export class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
  state: IAppContainerState = { visible: false };

  shouldComponentUpdate(nextProps: IAppContainerProps, nextState: IAppContainerState): boolean {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  private getNavButton = (): JSX.Element => {
    return <Button
      key="nav"
      icon
      onClick={() => this.setState({ visible: true})}
      iconChildren={`menu`}
    />;
  };

  static getToastAutohideTimeout(text: any, min: number = Snackbar.defaultProps.autohideTimeout) {
    const isString = (typeof text === 'string') || (text instanceof String);
    if (!isString) {
      return min;
    }
    const words = text.split(' ').length;
    const calculatedTimeout = words / AVERAGE_READING_WORDS_PER_SECOND * 1000;
    return Math.max(min, calculatedTimeout);
  }

  private getSnackBarAutohide = (): boolean => {
    if (this.props.toasts && this.props.toasts.size > 0) {
      if (this.props.toasts.first().dismissLabel != null) {
        return false;
      }
    }

    return true;
  }

  private getSnackBarClassName = (): string => {
    const { toasts } = this.props;
    return (toasts && toasts.size > 0) && (toasts.first().isError == true)
      ? 'appSnackbarError'
      : 'appSnackbarNormal';
  }

  errorText(contentError) {
    const {
      config: { method, url, baseURL },
      response, response: { data, data: { message, id, statusText } }
    } = contentError;

    return {
      errorMessage: response
        ? (message !== undefined
          ? `${message} (${id})`
          : data)
        : message,
      errorBody: [
        `(http: `,
        `${response ? `${status} ${statusText} // ` : ''}`,
        `${method.toUpperCase()} ${url.slice(baseURL.length)})`
      ].join('')
    }
  }

  errorContent(contentError) {
    const { intl: { formatMessage } } = this.props;
    const { config } = contentError;
    const { errorMessage, errorBody } = this.errorText(contentError);

    return (
      <span>
        <u>{formatMessage({ id: 'app.error' })}:</u>&nbsp;{errorMessage}
        <br />
        {config ? (
          <span style={{ fontSize: 'x-small' }}>{errorBody}</span>
        ) : null}
      </span>
    );
  }

  buildSnackBarContent(toast: IToastConfig) {
    const { formatMessage } = this.props.intl;
    const { contentTranslationId, contentMessage, contentError } = toast;

    let text, toastContent;
    if (contentTranslationId !== null) {
      text = formatMessage({ id: contentTranslationId }, { ...toast });
      toastContent = text;
    }
    else if (contentMessage !== null) {
      text = contentMessage;
      toastContent = text;
    }
    else {
      const { errorMessage, errorBody } = this.errorText(contentError);
      text = `${formatMessage({ id: 'app.error' })}: ${errorMessage} ${errorBody}`;
      toastContent = this.errorContent(contentError);
    }

    return {
      text: toastContent,
      action: toast.dismissLabel,
      autohideTimeout: AppContainer.getToastAutohideTimeout(text)
    };
  }

  render() {
    const { getNavButton, getSnackBarClassName, getSnackBarAutohide } = this;
    const { intl: { formatMessage }, toasts, dismissToastAction } = this.props;
    const { visible } = this.state;

    const toastContents = toasts.map(toast => this.buildSnackBarContent(toast)).toArray();

    return (
      <div>
        <Toolbar
          title={formatMessage({ id: 'app.title' })} colored
          fixed nav={getNavButton()}
        >
          <div className='system'>
            <p className='md-text'>{formatMessage({id: 'app.system'})}</p>
            <div className={config.Language} />
          </div>
        </Toolbar>
        <NavigationDrawer
          visible={visible}
          position="left"
          closeDrawer={() => this.setState({ visible: false })}
          toggleDrawer={() => this.setState({ visible: !visible })}
        />
        <Snackbar
          id="appSnackbar"
          className={getSnackBarClassName()}
          toasts={toastContents}
          onDismiss={dismissToastAction}
          autohide={getSnackBarAutohide()}
          autohideTimeout={toastContents.length > 0
            ? toastContents[0].autohideTimeout
            : Snackbar.defaultProps.autohideTimeout}
        />
      </div>
    );
  }
}

// higher order components -----------------------------------------------------
const mapStateToProps = (state: IRootReducer, ownProps: IAppContainerProps) => {
  const { baseReducer, sessionReducer } = state;
  return { ...ownProps, ...baseReducer, ...sessionReducer };
};

export default injectIntl(connect(mapStateToProps, {dismissToastAction}, null, {withRef: true})(AppContainer));
