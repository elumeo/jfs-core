import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { hideNotificationDrawerAction } from '../../store/action/NotificationAction';

export interface IHideNotificationDrawerButtonProps {
  hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
}

const HideNotificationDrawerButton: React.FC<IHideNotificationDrawerButtonProps> = ({
  hideNotificationDrawerAction
}) => (
  <Button icon onClick={hideNotificationDrawerAction}>
    arrow_forward
  </Button>
)

const enhance = connect(null, {hideNotificationDrawerAction});

export default enhance(HideNotificationDrawerButton);
