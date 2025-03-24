import React from 'react';
import { SxProps, Stack, StackProps, Box, BoxProps } from '@mui/material';
import definition from './Stateless/Style/Theme/Definition';

export type Props = StackProps & {
  navigation?: React.ReactNode;
  spacing?: number
  contentProps?: BoxProps
  fullWidth?: boolean
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
    fullWidth = false,
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
      <Box  {...contentProps} sx={{ marginLeft: '0 !important', width: fullWidth ? '100%' : 'auto', ...contentProps.sx }}>{children}</Box>
    </Stack>
  )
};

export default AppLayout
