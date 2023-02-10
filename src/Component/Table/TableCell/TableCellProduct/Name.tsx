import React from 'react';
import { Box, Typography } from '@mui/material';

const nameStyles = {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: `3`,
}

export type NameProps = {
  name: string;
}

const Name: React.FC<NameProps> = ({ name }) =>
  <Box>
    <Typography sx={nameStyles} fontWeight={600} >{name}</Typography>
  </Box>

export default Name
