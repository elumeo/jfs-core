import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const DismissButton = ({ onClick }) => (React.createElement(IconButton, { color: 'inherit', onClick: onClick },
    React.createElement(CloseIcon, null)));
export default DismissButton;
