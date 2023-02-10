import { Box, BoxProps, SxProps } from '@mui/material';
import { grey } from '@mui/material/colors';
import definition from 'Component/App/Stateless/Style/Theme/Definition';
import React from 'react';


export type BundleImageProps = {
  onClick?: BoxProps['onClick']
}
const bundleBoxStyles: SxProps = {
  width: definition.spacing(10),
  height: definition.spacing(10),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: grey?.[100],
  userSelect: 'none',
  cursor: 'pointer',
}

const BundleImage: React.FC<BundleImageProps> = () => {
  return <Box sx={bundleBoxStyles}>Product Bundle</Box>;
}

export default BundleImage
