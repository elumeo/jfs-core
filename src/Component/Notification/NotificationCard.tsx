import * as React from 'react';
import { connect } from 'react-redux';
import Card from 'react-md/lib/Cards/Card';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import { InjectedIntlProps, injectIntl } from 'react-intl';

import './NotificationCard.scss'
import ErrorContent from '../Snackbar/ErrorContent';
import { ICoreRootReducer } from '../../Store/Reducer';
import { dismissNotificationAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Store/Reducer/NotificationReducer';
import { Badge, Button, CardActions, CardText } from 'react-md';

export interface INotificationCardProps extends InjectedIntlProps {
  config: INotification;
  dismissNotificationAction?: typeof dismissNotificationAction;
  language?: string;
}

class NotificationCard extends React.Component<INotificationCardProps & InjectedIntlProps> {

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
    const { config: { message, translationId, error }, intl: { formatMessage } } = this.props;
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
  };

  getIcon = () => {
    const { config: { icon, error } } = this.props;
    const iconName = error ? 'error' : icon;
    return iconName ? <FontIcon className='icon md-text--inherit'>{iconName}</FontIcon> : null;
  };

  getTimestamp = () => {
    const { config: { timestamp }, intl: { formatTime, formatDate } } = this.props;
    const now = new Date();
    const displayDate = now.toDateString() != timestamp.toDateString();
    return <div className='timestamp'>{displayDate ? `${formatDate(timestamp)} ` : null}{formatTime(timestamp)}</div>;
  };

  getActions = (): React.ReactNode => {
    const { config, config: { customActionLabelTranslationId, dismissLabelTranslationId, onCustomAction, onDismiss }, intl: { formatMessage: _ } } = this.props;
    if (!(!onCustomAction) && !customActionLabelTranslationId) {
      throw new Error('If you provide a onCustomAction you should also provide a customActionLabelTranslationId');
    }
    return <CardActions className='md-dialog-footer'>
      {!onCustomAction
        ? null
        : <Button raised onClick={() => onCustomAction(config)}>
          {!customActionLabelTranslationId ? 'notification.action_1' : _({ id: customActionLabelTranslationId })}
        </Button>}
      <Button raised onClick={event => {
        event.stopPropagation();
        this.props.dismissNotificationAction(config.id);
        if (typeof onDismiss == 'function') {
          onDismiss(config);
        }
      }}>
        {_({ id: !dismissLabelTranslationId ? 'notification.dismiss' : dismissLabelTranslationId })}
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

export default injectIntl(connect(
  (store: ICoreRootReducer, ownProps: INotificationCardProps): INotificationCardProps => ({
    ...ownProps,
    language: store.languageReducer.language,
  }), {
    dismissNotificationAction
  })
  (NotificationCard)
);