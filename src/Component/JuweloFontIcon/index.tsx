import React from 'react';
import { connect } from 'react-redux';

import Global from '../../Store/Reducer/Global';
import './styles.scss';

export interface IJuweloFontIconProps {
  icon: string;
  error?: boolean;
  light?: boolean;
}

const JuweloFontIcon: React.FC<IJuweloFontIconProps> = (
  {
    icon,
    error,
    light
  }
) => {
  error = error === undefined ? false : error;
  light = light === undefined ? false : light;

  let className = 'juwelo-icon-font jif-' + icon;

  if (light) {
    className += ' -light';
  }

  if (error) {
    className += ' -error';
  }
  return <i className={className}/>;
}

const mapStateToProps = (
  _state: Global.State,
  props: IJuweloFontIconProps
): IJuweloFontIconProps => ({
  ...props,
});

export default (
  connect(mapStateToProps, {}, null, {forwardRef: true})(JuweloFontIcon)
);
