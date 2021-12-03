import React, { CSSProperties, memo } from 'react';
import { useIntl } from 'react-intl';
import { Button as MuiButton } from '@material-ui/core';

const buttonWrapperStyles: CSSProperties = { marginTop: '2px' };

export type ButtonProps = {
  id?: string;
  onClick?: HTMLElement['click'];
}

const Button = ({ id = null, onClick }: ButtonProps) => {
  const { formatMessage } = useIntl();
  return <div style={buttonWrapperStyles}>
    {id && <MuiButton size={'small'} color={'secondary'} onClick={onClick}>
      {formatMessage({ id: 'product.details' })}
    </MuiButton>}
  </div>;
};

export default memo(Button);
