import RefreshIcon from '@mui/icons-material/Refresh';
import {IconButton} from '@mui/material';
import React, {memo} from 'react';
import {IconButtonProps} from '@mui/material/IconButton';

const RefreshButton = (props: IconButtonProps) => <IconButton {...props}>
  <RefreshIcon/>
</IconButton>;

export default memo(RefreshButton);
