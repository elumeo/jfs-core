import * as React from 'react';
import { Box } from '@mui/material';

type CodeBoxProps = {
  component?: React.ElementType;
  size?: 'small' | 'medium';
}

const CodeBox = ({ children, component, size = 'medium' }: React.PropsWithChildren<CodeBoxProps>) => {
  return <Box
    component={component}
    mt={size === 'medium' ? 1 : 0}
    mb={size === 'medium' ? 1 : 0}
    borderRadius={theme => theme.spacing(1)}
    padding={size === 'medium' ? 1 : 0.5}
    bgcolor={theme =>
      theme.palette.grey[
      theme.palette.mode === 'dark'
        ? 700
        : 200
      ]}
    whiteSpace='break-spaces'
    color={theme => theme.palette.getContrastText(theme.palette.grey[theme.palette.mode === 'dark' ? 700 : 200])}
  >{children}</Box>;
};

export default CodeBox
