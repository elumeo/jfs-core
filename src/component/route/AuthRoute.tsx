import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../store/action/RouterAction';
import { connect } from "react-redux";
import IRootReducer from "../../store/reducer/RootReducer";
import NoAccess from "./NoAccess";
import { CircularProgress } from "react-md";

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  isAuthorized?: boolean;
  isCheckingLogin?: boolean;
  enterAuthorizedRoute?: () => void;
}

class AuthRoute extends React.Component<IAuthRouteProps> {
  constructor(props: IAuthRouteProps) {
    super(props);
    this.props.enterAuthorizedRoute();
  }

  render() {
    const { props: { Component, isAuthorized, isCheckingLogin, path, ...rest } } = this;
    if (isCheckingLogin) {
    return <CircularProgress id="auth-route-waiting-for-login"/>;
    } else if (isAuthorized) {
      return <BaseRoute {...rest} render={props => <Component {...props} />}/>;
    } else {
      return <NoAccess/>;
    }
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
