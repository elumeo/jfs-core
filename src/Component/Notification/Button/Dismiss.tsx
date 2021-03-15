import React from 'react';
import * as MUI from '@material-ui/core'
import * as ICON from '@material-ui/icons';

export type Props = {
  onClick: MUI.IconButtonProps['onClick'];
};

const DismissButton: React.FC<Props> = ({ onClick }) => (
  <MUI.IconButton
    color='inherit'
    onClick={onClick}>
    <ICON.Close/>
  </MUI.IconButton>
);

export default DismissButton;
