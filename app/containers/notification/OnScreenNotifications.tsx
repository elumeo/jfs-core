import * as React from "react"

import { connect } from "react-redux";
import { IRootReducer } from "../../store/reducer/RootReducer";
import NotificationCard from "./NotificationCard";

import "./OnScreenNotifications.scss";
import { INotification } from "../../store/reducer/NotificationReducer";

const ReactCSSTransitionGroup = require("react-addons-css-transition-group");

export interface INotificationFadeInProps {
  isAuthorized?: boolean;
  notifications?: INotification[];
}

class OnScreenNotifications extends React.Component<INotificationFadeInProps> {

  render() {
    const { notifications, isAuthorized } = this.props;
    if (!isAuthorized) {
      return null;
    }

    return (
      <ReactCSSTransitionGroup
        transitionName={"fadein"}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={200}
        className={"notification-fadein"}
      >
        {notifications.filter(n => n.onScreen).map(n => <NotificationCard config={n} key={n.id}/>)}
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: INotificationFadeInProps) => ({
  ...state.notificationReducer,
  ...state.sessionReducer,
  ...ownProps
});

export default connect(mapStateToProps)(OnScreenNotifications)