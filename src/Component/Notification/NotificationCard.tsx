import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';

import './NotificationCard.scss'
import ErrorContent, { errorText } from '../Snackbar/ErrorContent';
import Global from '../../Store/Reducer/Global';
import { dismissNotificationAction, fadeNotificationOffScreenAction } from '../../Store/Action/NotificationAction';
import { INotification, INotificationContent } from '../../Types/Notification';
import { Badge, Button, CardText } from 'react-md';
import Format from '../../Utilities/Format';
import { timeToRead as _timeToRead } from 'Component/Snackbar/TimeToRead';

export const timeToRead = (notification: INotificationContent): number => getContent(notification).timeToRead;

export const getPlainText = (notification: INotificationContent): string => getContent(notification).words;

export const getContent = (notification: INotificationContent) => {
  const { message, translationId, translationValues, error } = notification;
  const { formatMessage } = Format.Translations;
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
    words = typeof translationId == 'object'
      ? translationId.map(tId => formatMessage({ id: tId }, translationValues)).join(' ')
      : translationId;
    content = typeof translationId == 'object'
      ? <ul>{translationId.map((tId, i) => <li key={i}>{formatMessage({ id: tId }, translationValues)}</li>)}</ul>
      : formatMessage({ id: translationId }, translationValues);
  }
  if (error) {
    const { body, head } = errorText(error);
    words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
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
    const { config: { icon, error, isError, isSuccess } } = this.props;
    let iconName = icon;
    iconName = (error || isError) && !icon ? 'error' : iconName;
    iconName = isSuccess && !icon ? 'check' : iconName;
    return iconName ? <FontIcon className='icon md-text--inherit'>{iconName}</FontIcon> : null;
  };

  getTimestamp = () => {
    const { config: { timestamp } } = this.props;
    const { formatDate, formatTime } = Format;
    const now = new Date();
    const displayDate = now.toDateString() != timestamp.toDateString();
    return <div
      className='timestamp'>{displayDate ? `${formatDate(timestamp)} ` : null}{formatTime(timestamp)}</div>;
  };

  getActions = (): React.ReactNode[] => {
    const {
      config,
      config: {
        customActionTooltipTranslationId, customActionIconName, onCustomAction,
        dismissButtonVisible, onDismiss,
        hideButtonVisible, onHide
      }
    } = this.props;
    const { formatMessage } = Format.Translations;
    const fm = id => formatMessage({ id });
    if (!(!onCustomAction) && !customActionIconName) {
      throw new Error('If you provide a onCustomAction you should also provide a customActionIconName');
    }
    const actions = [];
    if (dismissButtonVisible !== false) {
      actions.push(
        <Button
          icon
          key='dismiss-btn'
          onClick={event => {
            event.stopPropagation();
            this.props.dismissNotificationAction(config.id);
            if (typeof onDismiss == 'function') {
              onDismiss(config, this);
            }
          }}>
          close
        </Button>
      );
    }
    if (hideButtonVisible !== false) {
      actions.push(
        <Button
          icon
          key='hide-btn'
          onClick={event => {
            event.stopPropagation();
            this.props.fadeNotificationOffScreenAction(config.id);
            if (typeof onHide == 'function') {
              onHide(config, this);
            }
          }}>
          arrow_forward
        </Button>
      );
    }
    if (!(!onCustomAction)) {
      actions.push(
        <Button
          icon
          key='custom-action-btn'
          tooltipLabel={customActionTooltipTranslationId ? fm(customActionTooltipTranslationId) : undefined}
          tooltipPosition={'left'}
          tooltipDelay={666}
          onClick={() => onCustomAction(config, this)}
        >
          {customActionIconName}
        </Button>
      );
    }
    return actions;
  };

  componentDidMount(): void {
    const { config, config: { onMount } } = this.props;
    if (typeof onMount == 'function') {
      onMount(config, this);
    }
  }

  render() {
    const { config, config: { error, isSuccess, isError, onClick } } = this.props;
    const errorClass = isError || error ? 'error' : '';
    const successClass = isSuccess ? 'success' : '';
    const clickClass = onClick ? 'clickable' : '';
    if (errorClass.length && successClass.length) {
      throw new Error('isError|error and isSuccess cannot be combined');
    }
    const actions = this.getActions();
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
          successClass, errorClass, clickClass
        ].join(' ')}>
        {this.getBadge()}
        <div className='notification-grid'>
          <div className='notification-grid-content'>
            {this.getHeader()}
            {this.getContent()}
          </div>
          {actions.length ? <div className='notification-grid-actions'>{actions}</div> : null}
        </div>
      </Card>
    )
  }
}

export default connect(
  (store: Global.State, ownProps: INotificationCardProps): INotificationCardProps => ({
    ...ownProps,
    language: store.Core.Language.language,
  }), {
    dismissNotificationAction,
    fadeNotificationOffScreenAction,
  })
(NotificationCard);
