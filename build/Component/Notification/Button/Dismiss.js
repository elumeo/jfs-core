import React from 'react';
import * as MUI from '@material-ui/core';
import * as ICON from '@material-ui/icons';
const DismissButton = ({ onClick }) => (React.createElement(MUI.IconButton, { color: 'inherit', onClick: onClick },
    React.createElement(ICON.Close, null)));
export default DismissButton;
