import React from 'react';
import * as MUI from '@material-ui/core';

export type Props = MUI.SvgIconProps;

const Wrapper: React.FC<Props> = props => (
  <MUI.SvgIcon
    viewBox="0 0 32 32"
    fontSize='inherit'
    color='inherit'
    {...props}/>
);

export default Wrapper;
