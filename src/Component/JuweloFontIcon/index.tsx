import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';
import { ICoreRootReducer } from '../../Store/Reducer';

export interface IJuweloFontIconProps {
  icon: string;
}

class JuweloFontIcon extends React.Component<IJuweloFontIconProps> {
  render() {
    return <i className={'juwelo-icon-font jif-' + this.props.icon} />;
  }
}

const mapStateToProps = (state: ICoreRootReducer, props: IJuweloFontIconProps) : IJuweloFontIconProps => ({
  ...props,
});

export default (
  connect(mapStateToProps, {}, null, {withRef: true})(JuweloFontIcon)
);
