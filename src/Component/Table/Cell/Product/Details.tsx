import React from 'react';
import { Stack, SxProps } from '@mui/material';
import Name from './Name';
import Button from './Button';

export type DetailsProps = {
  id?: string;
  name?: string;
  onClick?: HTMLElement['click'];
}
const sx: SxProps = {
  justifyContent: 'space-between',
  flexGrow: 1
}
const Details: React.FC<DetailsProps> = (
  {
    id = null,
    name = null,
    onClick = null
  }
) =>
  <Stack direction='column' sx={sx}>
    <Name name={name} />
    <Button onClick={onClick} id={id} />
  </Stack>


export default Details
