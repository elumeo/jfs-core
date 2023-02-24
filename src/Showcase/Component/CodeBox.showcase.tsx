import * as React from 'react';
import { Box } from '@mui/material';
import { memo } from 'react';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';

type CodeBoxProps = {
  component?: React.ElementType;
  size?: 'small' | 'medium';
}

const CodeBox = ({children, component, size = 'medium'}: React.PropsWithChildren<CodeBoxProps>) => {
  return <Box
    component={component}
    mt={size === 'medium' ? 1 : 0}
    mb={size === 'medium' ? 1 : 0}
    borderRadius={definition.spacing(1)}
    padding={size === 'medium' ? 1 : 0.5}
    bgcolor={definition.palette.grey['200']}
    color={definition.palette.text.primary}
  >{children}</Box>;
};

export default memo(CodeBox);
