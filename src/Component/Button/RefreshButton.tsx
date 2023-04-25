import RefreshIcon from '@mui/icons-material/Refresh';
import React, {FC} from 'react';
import IconButtonProgress, { IconButtonProgressProps } from './IconButtonProgress';

const RefreshButton: FC<IconButtonProgressProps> = (props) => <IconButtonProgress {...props}>
  <RefreshIcon />
</IconButtonProgress>;

export default RefreshButton
