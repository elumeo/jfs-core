import * as React from 'react';
import { connect } from 'react-redux';

import './Content.scss';

import IRootReducer from '../../store/reducer/RootReducer';

export interface IContentProps {
  splitViewEnabled?: boolean;
}

class Content extends React.Component<IContentProps> {
  render() {
    const { props: { children, splitViewEnabled } } = this;

    const contentClassName = [
      `authorized-content`,
      splitViewEnabled ? 'split-view--active' : ''
    ].join(' ');

    return <div className={contentClassName}>{children}</div>;
  }
}

const mapStateToProps = (state: IRootReducer, ownProps: IContentProps): IContentProps => ({
  ...state.splitViewReducer,
  ...ownProps,
});

const enhance = connect(
  mapStateToProps
);

export default enhance(Content);