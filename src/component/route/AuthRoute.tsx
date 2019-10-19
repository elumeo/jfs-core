import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';

import { enterAuthorizedRoute } from '../../store/action/RouterAction';

import IRootReducer from '../../store/reducer/RootReducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

export interface IAuthRouteProps extends IBaseRouteProps {
  Component: any;
  enterAuthorizedRoute?: () => void;
}

class AuthRoute extends React.Component<IAuthRouteProps> {
  constructor(props) {
    super(props);
    const {
      props: {
        enterAuthorizedRoute
      }
    } = this;
    enterAuthorizedRoute();
  }

  render() {
    const { props: { Component, ...rest } } = this;

    return (
      <BaseRoute
        {...rest}
        render={props => <Component {...props}/>}
      />
    );
  }
}

const mapStateToProps = (
  state: IRootReducer,
  ownProps: IAuthRouteProps
): IAuthRouteProps => ({
  ...ownProps
})

const enhance = compose(
  connect(mapStateToProps, { enterAuthorizedRoute })
);

export default enhance(AuthRoute);
