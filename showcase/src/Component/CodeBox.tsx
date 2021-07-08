import * as React from 'react';
import { Box } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { memo } from 'react';

type CodeBoxProps = {
  component?: React.ElementType;
  size?: 'small' | 'medium';
}

const CodeBox = ({children, component, size = 'medium'}: React.PropsWithChildren<CodeBoxProps>) => {
  const theme = useTheme();
  return <Box
    component={component}
    marginTop={size === 'medium' ? 1 : 0}
    marginBottom={size === 'medium' ? 1 : 0}
    borderRadius={theme.spacing(1)}
    padding={size === 'medium' ? 1 : 0.5}
    bgcolor={theme.palette.grey['200']}>{children}</Box>;
};

export default memo(CodeBox);
