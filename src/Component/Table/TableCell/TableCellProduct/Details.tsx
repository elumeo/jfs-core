import React, { CSSProperties, memo, useMemo } from 'react';
import { Grid } from '@material-ui/core';
import { Theme, useTheme } from '@material-ui/core/styles';
import Name from './Name';
import Button from './Button';

export type DetailsProps = {
  id?: string;
  name?: string;
  onClick?: HTMLElement['click'];
}

const Details = ({ id = null, name = null, onClick = null }: DetailsProps) => {
  const theme = useTheme<Theme>();
  const outerWrapperStyles: CSSProperties = useMemo(() => ({
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  }), []);

  return <Grid item xs>
    <div style={outerWrapperStyles}>
      <Name name={name} />
      <Button onClick={onClick} id={id} />
    </div>
  </Grid>;
};

export default memo(Details);
