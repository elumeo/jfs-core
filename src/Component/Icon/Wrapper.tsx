import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export type Props = SvgIconProps;

const Wrapper: React.FC<Props> = props => (
  <SvgIcon
    viewBox="0 0 32 32"
    fontSize='inherit'
    color='inherit'
    {...props}/>
);

export default Wrapper;
