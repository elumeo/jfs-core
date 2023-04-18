import React, {memo} from 'react';
import {Stack, SxProps} from '@mui/material';
import Name from './Name';
import Button from './Button';

export type Props = {
  id?: string;
  name?: string;
  onClick?: HTMLElement['click'];
}

const sx: SxProps = {
  justifyContent: 'space-between',
  flexGrow: 1
}
const Details: React.FC<Props> = ({id = null, name = null, onClick = null}) => <Stack direction='column' sx={sx}>
  <Name name={name}/>
  <Button onClick={onClick} id={id}/>
</Stack>;


export default memo(Details);
