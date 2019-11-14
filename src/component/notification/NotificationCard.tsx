import * as React from 'react';

import { Card } from 'react-md';
import { FontIcon } from 'react-md/lib/FontIcons';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import './NotificationCard.scss'
import ErrorContent from '../snackbar/ErrorContent';
import IRootReducer from '../../store/reducer/RootReducer';
import { connect } from 'react-redux';
import { dismissNotificationAction } from '../../store/action/NotificationAction';
import { INotification } from '../../store/reducer/NotificationReducer';
import { compose } from 'redux';

export interface INotificationCardProps extends InjectedIntlProps {
  config: INotification;
  dismissNotificationAction?: typeof dismissNotificationAction;
  language?: string;
}

class NotificationCard extends React.Component<INotificationCardProps & InjectedIntlProps> {

  getContent = (): JSX.Element => {
    const { config: { message, translationId, error }, intl: { formatMessage } } = this.props;
    if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
      throw new Error('Either \'message\' or \'translationId\' or \'error\' has to be provided.');
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
    return <p className="md-text--inherit">{this.getCloseButton()}{content}</p>
  };

  getIcon = () => {
    const { config: { icon, error } } = this.props;
    const iconName = error ? 'error' : icon;

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
    const { config, config: { error, isError, onClick }, intl: { formatMessage } } = this.props;
    const errorClass = isError || error ? 'error' : '';
    const clickClass = onClick ? 'clickable' : '';
    return (
      <Card
        onClick={() => {
          if(onClick) {
            onClick(config);
          }
        }}
        className={`md-cell md-cell--12 badges__notifications__notification ${errorClass} ${clickClass} ${formatMessage({id: 'app.title'})}`}>
        {this.getIcon()}
        {this.getContent()}
      </Card>
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: INotificationCardProps) => ({
  ...state.notificationReducer,
  ...state.languageReducer,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { dismissNotificationAction }),
  injectIntl
);

// noinspection JSUnusedGlobalSymbols
export default enhance(NotificationCard);
