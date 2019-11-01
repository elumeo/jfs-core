import * as React from "react"

import { connect } from "react-redux";
import IRootReducer from "../../store/reducer/RootReducer";
import NotificationCard from "./NotificationCard";

import "./OnScreenNotifications.scss";
import { INotification } from "../../store/reducer/NotificationReducer";

const ReactCSSTransitionGroup = require("react-addons-css-transition-group");

export interface IOnScreenNotificationsProps {
  notifications?: INotification[];
}

class OnScreenNotifications extends React.Component<IOnScreenNotificationsProps> {

  render() {
    const { notifications } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName={"fadein"}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={150}
        className={"notification-fadein"}
      >
        {notifications.filter(n => n.onScreen).map(n => <NotificationCard config={n} key={n.id}/>)}
      </ReactCSSTransitionGroup>
    );
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IOnScreenNotificationsProps) => ({
  ...state.notificationReducer,
  ...ownProps
});

// noinspection JSUnusedGlobalSymbols
export default connect(mapStateToProps)(OnScreenNotifications)