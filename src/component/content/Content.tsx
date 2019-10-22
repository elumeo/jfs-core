import * as React from 'react';
import { connect } from 'react-redux';

import './Content.scss';

import Session from '../../base/Session';
import IRootReducer from '../../store/reducer/RootReducer';

export interface IContentProps {
  isAuthorized?: boolean;
  routeType?: string;
  splitViewEnabled?: boolean;
}

class Content extends React.Component<IContentProps> {
  render() {
    const {props: {isAuthorized, children, routeType, splitViewEnabled}} = this;

    const unclearAuthorizationState = Session.getToken() && !isAuthorized;
    const contentClassName = [
      `authorized-content`,
      splitViewEnabled ? 'split-view--active' : '',
      ...(
        (routeType === 'authorized' || routeType === null) &&
        (unclearAuthorizationState || !isAuthorized)
          ? ['hidden']
          : []
      )
    ].join(' ');

    return (
      <div className={contentClassName}>
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IContentProps): IContentProps => ({
  ...state.splitViewReducer,
  ...ownProps,
  isAuthorized: state.sessionReducer.isAuthorized,
  routeType: state.routerReducer.routeType
});

const enhance = connect(
  mapStateToProps
);

// noinspection JSUnusedGlobalSymbols
export default enhance(Content);
