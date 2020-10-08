import React from 'react';
import { INotification } from 'Types/Notification';
import { InjectedIntl, injectIntl } from 'react-intl';
import DismissButton from './DismissButton';
import HideButton from './HideButton';
import CustomActionButton from './CustomActionButton';
import { INotificationCardProps } from '.';

export type Props = {
  intl?: InjectedIntl;
  notification: INotification;
  topLevelRef: React.Component<INotificationCardProps>;
}

const Actions: React.FC<Props> = ({
  intl: { formatMessage },
  notification,
  topLevelRef: ref
}) => {
  const {
    customActionTooltipTranslationId, customActionIconName, onCustomAction,
    dismissButtonVisible, onDismiss,
    hideButtonVisible, onHide
  } = notification;
  if (!(!onCustomAction) && !customActionIconName) {
    throw new Error(
      'If you provide a onCustomAction you should also provide a customActionIconName'
    );
  }
  const actions = [];
  if (dismissButtonVisible !== false) {
    actions.push(
      <DismissButton
        key={notification.id}
        topLevelRef={ref}
        notification={notification}
        onClick={onDismiss}/>
    );
  }
  if (hideButtonVisible !== false) {
    actions.push(
      <HideButton
        key={notification.id}
        topLevelRef={ref}
        notification={notification}
        onClick={onHide}/>
    );
  }
  if (!!onCustomAction) {
    actions.push(
      <CustomActionButton
        key={notification.id}
        notification={notification}
        iconName={customActionIconName}
        tooltipLabel={
          customActionTooltipTranslationId
            ? formatMessage({ id: customActionTooltipTranslationId })
            : undefined
        }
        topLevelRef={ref}
        onClick={onCustomAction}/>
    );
  }
  return (
    actions.length
      ? (
        <div className='notification-grid-actions'>
          {actions}
        </div>
      )
      : null
  )
}

const enhance = injectIntl;

export default enhance(Actions);
