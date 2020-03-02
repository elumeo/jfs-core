import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';

import './NotificationCard.scss'
import ErrorContent from '../Snackbar/ErrorContent';
import { ICoreRootReducer } from '../../Store/Reducer';
import { dismissNotificationAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Store/Reducer/NotificationReducer';
import International from '../International';

export interface INotificationCardProps {
  config: INotification;
  dismissNotificationAction?: typeof dismissNotificationAction;
  language?: string;
}

class NotificationCard extends React.Component<INotificationCardProps> {

  getContent = (): JSX.Element => {
    return (
      <International>
        {({ formatMessage }) => {
          const {config: {message, translationId, error}} = this.props;
          if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
            throw new Error(
              `Either 'message' or 'translationId' or 'error' has to be provided.`
            );
          }
          let content = null;
          if (message) {
            content = message;
          }
          if (translationId) {
            content = formatMessage({id: translationId});
          }
          if (error) {
            content = <ErrorContent contentError={error}/>
          }
          return <p className="md-text--inherit">{this.getCloseButton()}{content}</p>
        }}
      </International>
    );
  };

  getIcon = () => {
    const {config: {icon, error}} = this.props;
    const iconName = error ? 'error' : icon;

    return iconName ? (
      <div className="badges__notifications__notification__icon">
        <FontIcon className="md-text--inherit">{iconName}</FontIcon>
      </div>
    ) : null;
  };

  getCloseButton = () => {
    const {dismissNotificationAction, config} = this.props;
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

  render = () => (
    <International>
      {({ formatMessage }) => {
        const {config, config: {error, isError, onClick} } = this.props;
        const errorClass = isError || error ? 'error' : '';
        const clickClass = onClick ? 'clickable' : '';
        return (
          <Card
            onClick={() => {
              if (onClick) {
                onClick(config);
              }
            }}
            className={[
              `md-cell`, `md-cell--12`,
              `badges__notifications__notification`,
              errorClass, clickClass, formatMessage({id: 'app.title'})
            ].join(' ')}>
            {this.getIcon()}
            {this.getContent()}
          </Card>
        )
      }}
    </International>
  )
}

const mapStateToProps = (
  state: ICoreRootReducer,
  ownProps: INotificationCardProps
): INotificationCardProps => ({
  ...state.notificationReducer,
  ...state.languageReducer,
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, {dismissNotificationAction})
);

export default enhance(NotificationCard);
