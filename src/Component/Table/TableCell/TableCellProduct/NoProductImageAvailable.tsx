import { Box, BoxProps, SxProps } from '@mui/material';
import { grey } from '@mui/material/colors';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
import React from 'react';


export type NoProductImageAvailableProps = {
  onClick?: BoxProps['onClick']
}

const styles: SxProps = {
  width: definition.spacing(10),
  height: definition.spacing(10),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: grey['100'],
  userSelect: 'none',
  cursor: 'pointer',
}
const NoProductImageAvailable: React.FC<NoProductImageAvailableProps> = ({ onClick = null }) =>
  <Box sx={styles} onClick={onClick}>No Image available</Box>;


export default NoProductImageAvailable

