import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';

import './NotificationCard.scss'
import ErrorContent, { errorText } from '../Snackbar/ErrorContent';
import { ICoreRootReducer } from '../../Store/Reducer';
// noinspection TypeScriptPreferShortImport
import { dismissNotificationAction, fadeNotificationOffScreenAction } from '../../Store/Action/NotificationAction';
import { INotification, INotificationContent } from '../../Store/Reducer/NotificationReducer';
import { Badge, Button, CardActions, CardText } from 'react-md';
import Translations from '../../Base/Translations';
import { timeToRead as _timeToRead } from '../../Base/Utilities';

export const timeToRead = (notification: INotificationContent): number => getContent(notification).timeToRead;

export const getPlainText = (notification: INotificationContent): string => getContent(notification).words;

export const getContent = (notification: INotificationContent) => {
  const { message, translationId, error } = notification;
  const { formatMessage } = Translations;
  if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
    throw new Error(
      `Either 'message', 'translationId' or 'error' most be specified.`
    );
  }
  let content = null;
  let words = '';
  if (message) {
    words = typeof message == 'object' ? message.join(' ') : message;
    content = typeof message == 'object' ? <ul>{message.map((m, i) => <li key={i}>{m}</li>)}</ul> : message;
  }
  if (translationId) {
    words = typeof translationId == 'object' ? translationId.map(tId => formatMessage({ id: tId })).join(' ') : translationId;
    content = typeof translationId == 'object'
      ? <ul>{translationId.map((tId, i) => <li key={i}>{formatMessage({ id: tId })}</li>)}</ul>
      : formatMessage({ id: translationId });
  }
  if (error) {
    const { body, head } = errorText(error);
    words = `${formatMessage({ id: 'app.error' })}: ${body} ${head}`;
    content = <ErrorContent contentError={error}/>
  }
  return {
    words,
    content: <CardText className='md-text--inherit'>{content}</CardText>,
    timeToRead: _timeToRead(words)
  };
};

export interface INotificationCardProps {
  config: INotification;
  dismissNotificationAction?: typeof dismissNotificationAction;
  fadeNotificationOffScreenAction?: typeof fadeNotificationOffScreenAction;
  language?: string;
}

class NotificationCard extends React.Component<INotificationCardProps> {

  getBadge = (): React.ReactNode => {
    const { config: { count, id } } = this.props;
    return count <= 1
      ? null
      : <Badge primary circular className='badge' badgeId={`count_of_${id}`} badgeContent={`${count}x`}>
        <FontIcon> </FontIcon>
      </Badge>;
  };

  getHeader = (): React.ReactNode => {
    return <header className='header'>
      {this.getIcon()}
      {this.getTimestamp()}
    </header>
  };

  getContent = (): JSX.Element => getContent(this.props.config).content;

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
    const {
      config,
      config: {
        customActionLabelTranslationId, onCustomAction,
        dismissButtonVisible, dismissLabelTranslationId, onDismiss,
        hideButtonVisible, hideLabelTranslationId, onHide
      }
    } = this.props;
    const { formatMessage } = Translations;
    if (!(!onCustomAction) && !customActionLabelTranslationId) {
      throw new Error('If you provide a onCustomAction you should also provide a customActionLabelTranslationId');
    }
    const actions = [];
    if (!(!onCustomAction)) {
      actions.push(
        <Button raised key='custom-action-btn' onClick={() => onCustomAction(config, this)}>
          {!customActionLabelTranslationId ? 'notification.action_1' : formatMessage({ id: customActionLabelTranslationId })}
        </Button>
      );
    }
    if (hideButtonVisible !== false) {
      actions.push(
        <Button raised key='hide-btn' onClick={event => {
          event.stopPropagation();
          this.props.fadeNotificationOffScreenAction(config.id);
          if (typeof onHide == 'function') {
            onHide(config, this);
          }
        }}>
          {formatMessage({ id: !hideLabelTranslationId ? 'notification.hide' : hideLabelTranslationId })}
        </Button>
      );
    }
    if (dismissButtonVisible !== false) {
      actions.push(
        <Button raised key='dismiss-btn' onClick={event => {
          event.stopPropagation();
          this.props.dismissNotificationAction(config.id);
          if (typeof onDismiss == 'function') {
            onDismiss(config, this);
          }
        }}>
          {formatMessage({ id: !dismissLabelTranslationId ? 'notification.dismiss' : dismissLabelTranslationId })}
        </Button>
      );
    }
    return <CardActions className='md-dialog-footer' children={actions}/>;
  };

  componentDidMount(): void {
    const { config, config: { onMount } } = this.props;
    if (typeof onMount == 'function') {
      onMount(config, this);
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
            onClick(config, this);
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
    dismissNotificationAction,
    fadeNotificationOffScreenAction,
  })
(NotificationCard);