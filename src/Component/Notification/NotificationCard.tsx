import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';

import './NotificationCard.scss'
import ErrorContent from '../Snackbar/ErrorContent';
import { ICoreRootReducer } from '../../Store/Reducer';
import { dismissNotificationAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Store/Reducer/NotificationReducer';
import International from '../International';
import { Badge, Button, CardActions, CardText } from 'react-md';
import Translations from '../../Base/Translations';

export interface INotificationCardProps {
  config: INotification;
  dismissNotificationAction?: typeof dismissNotificationAction;
  language?: string;
}

class NotificationCard extends React.Component<INotificationCardProps> {

  getBadge = (): React.ReactNode => {
    const { config: { count, id } } = this.props;
    return count <= 1
      ? null
      : <Badge primary circular className='badge' badgeId={`count_of_${id}`} badgeContent={`${count}x`}/>;
  };

  getHeader = (): React.ReactNode => {
    return <header className='header'>
      {this.getIcon()}
      {this.getTimestamp()}
    </header>
  };

  getContent = (): JSX.Element => {
    return <International>{
      ({ formatMessage }) => {
        const { config: { message, translationId, error } } = this.props;
        if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
          throw new Error(
            `Only either 'message', 'translationId' or 'error' can be specified.`
          );
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
        return <CardText className='md-text--inherit'>{content}</CardText>
      }
    }
    </International>;
  };

  getIcon = () => {
    const { config: { icon, error } } = this.props;
    const iconName = error ? 'error' : icon;
    return iconName ? <FontIcon className='icon md-text--inherit'>{iconName}</FontIcon> : null;
  };

  getTimestamp = () => {
    const { config: { timestamp } } = this.props;
    const { formatDate, formatTime } = Translations; 
    const now = new Date();
    const displayDate = now.toDateString() != timestamp.toDateString();
    return <div
      className='timestamp'>{displayDate ? `${formatDate(timestamp)} ` : null}{formatTime(timestamp)}</div>;
  };

  getActions = (): React.ReactNode => {
    const { config, config: { customActionLabelTranslationId, dismissLabelTranslationId, onCustomAction, onDismiss } } = this.props;
    const { formatMessage } = Translations;
    if (!(!onCustomAction) && !customActionLabelTranslationId) {
      throw new Error('If you provide a onCustomAction you should also provide a customActionLabelTranslationId');
    }
    return <CardActions className='md-dialog-footer'>
      {!onCustomAction
        ? null
        : <Button raised onClick={() => onCustomAction(config)}>
          {!customActionLabelTranslationId ? 'notification.action_1' : formatMessage({ id: customActionLabelTranslationId })}
        </Button>}
      <Button raised onClick={event => {
        event.stopPropagation();
        this.props.dismissNotificationAction(config.id);
        if (typeof onDismiss == 'function') {
          onDismiss(config);
        }
      }}>
        {formatMessage({ id: !dismissLabelTranslationId ? 'notification.dismiss' : dismissLabelTranslationId })}
      </Button>
    </CardActions>;
  };

  componentDidMount(): void {
    const { config, config: { onMount } } = this.props;
    if (typeof onMount == 'function') {
      onMount(config);
    }
  }

  render() {
    const { config, config: { error, isError, onClick } } = this.props;
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
          errorClass, clickClass
        ].join(' ')}>
        {this.getBadge()}
        {this.getHeader()}
        {this.getContent()}
        {this.getActions()}
      </Card>
    )
  }
}

export default connect(
  (store: ICoreRootReducer, ownProps: INotificationCardProps): INotificationCardProps => ({
    ...ownProps,
    language: store.languageReducer.language,
  }), {
    dismissNotificationAction
  })
(NotificationCard);