import React from 'react';
import { connect } from 'react-redux';
import Global from '../../Store/Reducer/Global';
import './Content.scss';

namespace Content {
  export type Props = {
    splitViewEnabled?: boolean;
  }
}

const Content: React.FC<Content.Props> = ({
  children, splitViewEnabled
}) => {
  const contentClassName = [
    `authorized-content`,
    splitViewEnabled ? 'split-view--active' : ''
  ].join(' ');

  return (
    <div className={contentClassName}>
      {children}
    </div>
  );
}

const mapStateToProps = (
  state: Global.State,
  ownProps: Content.Props
): Content.Props => ({
  ...state.Core.SplitView,
  ...ownProps,
});

const enhance = connect(mapStateToProps);

export default enhance(Content);
