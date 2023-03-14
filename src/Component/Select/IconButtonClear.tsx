import {IconButton} from '@mui/material';
import {Clear} from '@mui/icons-material';
import React, {FC} from 'react';
import {IconButtonProps} from '@mui/material/IconButton';

type Props = {
  onClear: IconButtonProps['onClick']
}

const IconButtonClear: FC<Props> = ({onClear}: Props) => <IconButton
  sx={{position: 'absolute', zIndex: 1, right: 24, top: 'calc(50% - 14px)'}}
  color='secondary'
  size={'small'}
  onClick={onClear}
><Clear onMouseDown={event => event.stopPropagation()} fontSize={'small'}/></IconButton>;

export default IconButtonClear;
