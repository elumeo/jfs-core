import RefreshIcon from '@mui/icons-material/Refresh';
import React from 'react';
// import {IconButtonProps} from '@mui/material/IconButton';
import IconButtonProgress, { type IconButtonProgressProps } from './IconButtonProgress';

const RefreshButton = (props: IconButtonProgressProps) => <IconButtonProgress {...props}>
  <RefreshIcon />
</IconButtonProgress>;

export default RefreshButton
