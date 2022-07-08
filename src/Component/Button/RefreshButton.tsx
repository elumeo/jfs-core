import RefreshIcon from '@material-ui/icons/Refresh';
import {IconButton} from '@material-ui/core';
import React, {memo} from 'react';
import {IconButtonProps} from '@material-ui/core/IconButton';

const RefreshButton = (props: IconButtonProps) => <IconButton {...props}>
  <RefreshIcon/>
</IconButton>;

export default memo(RefreshButton);
