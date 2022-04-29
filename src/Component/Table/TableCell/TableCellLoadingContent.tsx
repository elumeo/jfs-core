import React, { memo } from 'react';
import { Skeleton } from '@mui/material';

const TableCellLoadingContent = () => <Skeleton variant='text' width={'100%'} height={'100%'} animation={'wave'} />;

export default memo(TableCellLoadingContent);
