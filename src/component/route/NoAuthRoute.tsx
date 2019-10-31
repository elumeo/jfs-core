import * as React from 'react';
import BaseRoute, { IBaseRouteProps } from './BaseRoute';

import { enterUnauthorizedRoute } from '../../store/action/RouterAction';

import IRootReducer from '../../store/reducer/RootReducer';

import { connect } from 'react-redux';
import { compose } from 'redux';

export interface INoAuthRouteProps extends IBaseRouteProps {
  Component: any;
  enterUnauthorizedRoute?: () => void;
}

class NoAuthRoute extends React.Component<INoAuthRouteProps> {
  constructor(props) {
    super(props);
    this.props.enterUnauthorizedRoute();
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
  ownProps: INoAuthRouteProps
): INoAuthRouteProps => ({
  ...ownProps
});

const enhance = compose(
  connect(mapStateToProps, { enterUnauthorizedRoute })
);

export default enhance(NoAuthRoute);
