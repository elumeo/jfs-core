import React from 'react';

import './styles.scss';
import { connect } from 'react-redux';
import Global from '../../Store/Reducer/Global';

export interface IJuweloFontIconProps {
  icon: string;
}

const JuweloFontIcon: React.FC<IJuweloFontIconProps> = ({
  icon
}) => {
  const className = 'juwelo-icon-font jif-' + icon;
  return <i className={className}/>;
}

const mapStateToProps = (
  _state: Global.State,
  props: IJuweloFontIconProps
) : IJuweloFontIconProps => ({
  ...props,
});

export default (
  connect(mapStateToProps, {}, null, {withRef: true})(JuweloFontIcon)
);
