import * as React from 'react';

import { Card } from "react-md";
import { FontIcon } from "react-md/lib/FontIcons";
import { InjectedIntlProps, injectIntl } from "react-intl";

import './NotificationCard.scss'
import ErrorContent from "../snackbar/ErrorContent";
import { IRootReducer } from "../../store/reducer/RootReducer";
import { connect } from "react-redux";
import { dismissNotificationAction } from "../../store/action/NotificationAction";
import { INotification } from "../../store/reducer/NotificationReducer";

export interface INotificationCardProps extends InjectedIntlProps {
  config: INotification;
  dismissNotificationAction?: (number) => void;
}

class NotificationCard extends React.Component<INotificationCardProps> {
  static defaultProps = { onScreen: true };

  getContent = (): JSX.Element => {
    const { config: { message, translationId, error }, intl: { formatMessage } } = this.props;
    if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
      throw new Error("Either 'message' or 'translationId' or 'error' has to be provided.");
    }
    let content = null;
    if (message) {
      content = message;
    }
    if (translationId) {
      content = formatMessage({ id: translationId });
    }
    if (error) {
      content = <ErrorContent contentError={error}/>
    }
    return <p className="md-text--inherit">{content}</p>
  };

  getIcon = () => {
    const { config: { icon, error } } = this.props;
    const iconName = error ? "error" : icon;

    return iconName ? (
      <div className="badges__notifications__notification__icon">
        <FontIcon className="md-text--inherit">{iconName}</FontIcon>
      </div>
    ) : null;
  };

  getCloseButton = () => {
    const { dismissNotificationAction, config } = this.props;
    return <button
      onClick={(event) => {
        event.stopPropagation();
        dismissNotificationAction(config.id);
      }}
      className="md-btn md-text--inherit md-pointer--hover badges__notifications__notification__close"
    >
      <FontIcon className="md-text--inherit">close</FontIcon>
    </button>;
  };

  render() {
    const { config, config: { error, isError, onClick } } = this.props;
    const errorClass = isError || error ? 'error' : '';
    const clickClass = onClick ? 'clickable' : '';
    return (
      <Card
        onClick={() => {
          onClick ? onClick(config) : undefined;
        }}
        className={`md-cell md-cell--12 badges__notifications__notification ${errorClass} ${clickClass}`}>
        {this.getIcon()}
        {this.getContent()}
        {this.getCloseButton()}
      </Card>
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: INotificationCardProps) => ({
  ...state.notificationReducer,
  ...state.settingsReducer,
  ...ownProps
});

export default injectIntl(connect(mapStateToProps, {
  dismissNotificationAction
},null)(NotificationCard))