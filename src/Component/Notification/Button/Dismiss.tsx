import React from 'react';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export type Props = {
  onClick: IconButtonProps['onClick'];
};

const DismissButton: React.FC<Props> = ({ onClick }) => (
  <IconButton color='inherit' onClick={onClick}>
    <CloseIcon />
  </IconButton>
);

export default DismissButton;
