import React, { CSSProperties, memo, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { Button as MuiButton } from '@material-ui/core';

const buttonWrapperStyles: CSSProperties = { marginTop: '2px' };

export type ButtonProps = {
  id?: string;
  onClick?: HTMLElement['click'];
}

const Button = ({ id = null, onClick }: ButtonProps) => {
  const { formatMessage } = useIntl();
  const styles = useMemo<CSSProperties>(() => ({ textTransform: 'initial' }), []);
  return <div style={buttonWrapperStyles}>
    {id && <MuiButton color={'secondary'} onClick={onClick} style={styles}>
      {formatMessage({ id: 'product.details' })}
    </MuiButton>}
  </div>;
};

export default memo(Button);
