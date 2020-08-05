import React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { dismissAllNotificationsAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Types/Notification';
import Global from '../../Store/Reducer/Global';

export interface IDismissAllNotificationsButtonProps {
  notifications?: INotification[];
  dismissAllNotificationsAction?: typeof dismissAllNotificationsAction;
}

const DismissAllNotificationsButton: React.FC<IDismissAllNotificationsButtonProps> = ({
  dismissAllNotificationsAction,
  notifications
}) => (
  <Button
    icon
    onClick={() => dismissAllNotificationsAction()}
    disabled={!notifications.length}>
    delete
  </Button>
);

const mapStateToProps = (
  state: Global.State,
  ownProps: IDismissAllNotificationsButtonProps
): IDismissAllNotificationsButtonProps => ({
  ...state.Core.Notification,
  ...ownProps
});

const enhance = connect(mapStateToProps, {dismissAllNotificationsAction});

export default enhance(DismissAllNotificationsButton);
