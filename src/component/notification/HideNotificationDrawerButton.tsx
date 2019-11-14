import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { hideNotificationDrawerAction } from '../../store/action/NotificationAction';

export interface IHideNotificationDrawerButtonProps {
  hideNotificationDrawerAction?: typeof hideNotificationDrawerAction;
}

class HideNotificationDrawerButton extends React.Component<IHideNotificationDrawerButtonProps> {
  render() {
    return <Button icon onClick={this.props.hideNotificationDrawerAction}>arrow_forward</Button>;
  }
}

const enhance = connect(null, { hideNotificationDrawerAction });

export default enhance(HideNotificationDrawerButton);
