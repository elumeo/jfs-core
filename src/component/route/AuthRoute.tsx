import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';
import { enterAuthorizedRoute } from '../../store/action/RouterAction';
import { connect } from "react-redux";
import IRootReducer from "../../store/reducer/RootReducer";

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

  key = new Date().getTime() + '-' + Math.random();

  render() {
    const { props: { Component, isAuthorized, path, ...rest } } = this;
    return isAuthorized ? <BaseRoute {...rest} key={this.key} render={props => <Component {...props} />}/> : null
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
