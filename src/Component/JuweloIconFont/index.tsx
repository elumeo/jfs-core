import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface IJuweloIconFontProps {
  icon: string;
}

class JuweloIconFont extends React.Component<IJuweloIconFontProps> {
  render() {
    return <i className={'juwelo-icon-font jif-' + this.props.icon} />;
  }
}

const mapStateToProps = (state: ICoreRootReducer, props: IJuweloIconFontProps) : IJuweloIconFontProps => ({
  ...props,
});

export default (
  connect(mapStateToProps, {}, null, {withRef: true})(JuweloIconFont)
);
