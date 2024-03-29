import React, {memo} from 'react';
import {useIntl} from 'react-intl';
import {ButtonProps as MuiButtonProps, Button as MuiButton, SxProps} from '@mui/material';

const styles: SxProps = {
  textTransform: 'initial',
  width: 'fit-content',
  p: .5,
  lineHeight: 1
}

export type Props = {
  id?: string;
  onClick?: MuiButtonProps['onClick'];
}

const Button: React.FC<Props> = ({id = null, onClick}) => {
  const {formatMessage} = useIntl();
  return id && <MuiButton color={'secondary'} onClick={onClick} sx={styles}>
    {formatMessage({id: 'product.details'})}
  </MuiButton>;
};

export default memo(Button);
