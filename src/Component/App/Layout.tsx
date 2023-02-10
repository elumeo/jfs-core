import React from 'react';
import { SxProps, Stack, StackProps } from '@mui/material';
import definition from './Stateless/Style/Theme/Definition';
import { Box, BoxProps } from '@mui/system';

export type Props = StackProps & {
  navigation?: React.ReactNode;
  spacing?: number
  contentProps?: BoxProps
}

const gridContainerSx: SxProps = ({
  height: '100%',
  maxHeight: `calc(100vh - ${definition.mixins.toolbar.minHeight}px)`,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
});


const AppLayout: React.FC<Props> = (
  {
    children,
    navigation = null,
    spacing = 1,
    contentProps = {},
    ...containerProps
  }) => {

  return (
    <Stack
      p={spacing}
      sx={{ ...gridContainerSx, ...containerProps?.sx ?? {} }}
      spacing={spacing}
      direction={'row'}
      gap={(navigation && spacing > 0) ? spacing : 0}
      {...containerProps}>
      {navigation}
      <Box {...contentProps}>{children}</Box>
    </Stack>
  )
};

export default AppLayout
