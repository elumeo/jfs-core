import React from 'react';
import { INotification } from 'Types/Notification';
import { InjectedIntl, injectIntl } from 'react-intl';
import DismissButton from './DismissButton';
import HideButton from './HideButton';
import CustomActionButton from './CustomActionButton';
import { INotificationCardProps } from '.';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const {
    customActionTooltipTranslationId, customActionIconName, onCustomAction,
    dismissButtonVisible, onDismiss,
    hideButtonVisible, onHide, onCustomActionDispatch = []
  } = notification;
  if ((!!onCustomAction || !!onCustomActionDispatch.length) && !customActionIconName) {
    throw new Error(
      'If you provide a onCustomAction or onCustomActionDispatch you should also provide a customActionIconName'
    );
  }
  const actions = [];
  if (dismissButtonVisible !== false) {
    actions.push(
      <DismissButton
        key={`${notification.id}-dismiss`}
        topLevelRef={ref}
        notification={notification}
        onClick={onDismiss}/>
    );
  }
  if (hideButtonVisible !== false) {
    actions.push(
      <HideButton
        key={`${notification.id}-hide`}
        topLevelRef={ref}
        notification={notification}
        onClick={onHide}/>
    );
  }
  if (!!onCustomAction || !!onCustomActionDispatch.length) {
    actions.push(
      <CustomActionButton
        key={`${notification.id}-custom`}
        notification={notification}
        iconName={customActionIconName}
        tooltipLabel={
          customActionTooltipTranslationId
            ? formatMessage({ id: customActionTooltipTranslationId })
            : undefined
        }
        topLevelRef={ref}
        onClick={() => {
          if (!!onCustomAction) {
            onCustomAction(notification, ref)
          } else {
            onCustomActionDispatch.forEach(a => dispatch(a))
          }
        }}/>
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
