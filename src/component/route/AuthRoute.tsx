import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../store/action/RouterAction';
import { connect } from "react-redux";
import IRootReducer from "../../store/reducer/RootReducer";
import "./AuthRoute.scss"

const ReactCSSTransitionGroup = require("react-addons-css-transition-group");

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  isAuthorized?: boolean;
  enterAuthorizedRoute?: () => void;
}

class AuthRoute extends React.Component<IAuthRouteProps> {
  constructor(props: IAuthRouteProps) {
    super(props);
    this.props.enterAuthorizedRoute();
  }

  render() {
    const { props: { Component, isAuthorized, path, ...rest } } = this;
    return (
      <ReactCSSTransitionGroup
        transitionName={"fade-opacity"}
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
        className={"fade-opacity-container"}
      >
        {isAuthorized ? <BaseRoute {...rest} key={path} render={props => <Component {...props} />}/> : null}
      </ReactCSSTransitionGroup>
      )
  }
}

// noinspection JSUnusedGlobalSymbols
export default connect(
  (state: IRootReducer, ownProps: IAuthRouteProps): IAuthRouteProps => ({
    ...ownProps,
    ...state.sessionReducer
  }),
  {
    enterAuthorizedRoute
  }
)(AuthRoute);
