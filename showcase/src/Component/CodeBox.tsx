import * as React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { memo } from 'react';

const CodeBox = ({children}: React.PropsWithChildren<{}>) => {
  const theme = useTheme();
  return <Box marginTop={1} marginBottom={1} borderRadius={theme.spacing(1)} padding={1} bgcolor={theme.palette.grey['100']}>
    {children}
  </Box>;
};

export default memo(CodeBox);
