import {Box, Skeleton, TableCellProps} from '@mui/material';
import React from 'react';
import Root from './Root';

const Loading: React.FC<TableCellProps> = (props) => {
  const paddingY = props?.size === 'small' ? 6 : 16;
  const paddingX = 16;
  return <Root {...props} sx={{position: 'relative'}} size={'medium'}>
    <Box position={'absolute'} top={paddingY} bottom={paddingY} right={paddingX} left={paddingX}>
      <Skeleton variant="rectangular" width={'100%'} height={'100%'} animation={'wave'}/>
    </Box>
  </Root>;
}

export default Loading;
