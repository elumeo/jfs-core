import React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export type Props = {
  onClick: IconButtonProps['onClick'];
};

const DismissButton: React.FC<Props> = ({ onClick }) => (
  <IconButton color='inherit' onClick={onClick}>
    <CloseIcon />
  </IconButton>
);

export default DismissButton;
