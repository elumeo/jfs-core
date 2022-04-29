import React from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export type Props = SvgIconProps;

const Wrapper: React.FC<Props> = props => (
  <SvgIcon viewBox='0 0 32 32' color='inherit' {...props} />
);

export default Wrapper;
