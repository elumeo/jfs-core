import * as React from 'react';
import { Button } from 'react-md';
import { connect } from 'react-redux';
import { dismissAllNotificationsAction } from '../../Store/Action/NotificationAction';
import { INotification } from '../../Store/Reducer/NotificationReducer';
import { ICoreRootReducer } from '../../Store/Reducer';

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
  state: ICoreRootReducer,
  ownProps: IDismissAllNotificationsButtonProps
): IDismissAllNotificationsButtonProps => ({
  ...state.notificationReducer,
  ...ownProps
});

const enhance = connect(mapStateToProps, {dismissAllNotificationsAction});

export default enhance(DismissAllNotificationsButton);
