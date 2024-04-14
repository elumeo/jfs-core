import React, { CSSProperties, memo } from 'react';
import { Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const nameWrapperStyles: CSSProperties = { flex: 1, minHeight: '55px' };

const useStyles = makeStyles((theme: Theme) => createStyles({
    nameStyles: {
      // @ts-ignore
      fontWeight: theme.typography.fontWeightBold,
      whiteSpace: 'normal',
      display: '-webkit-box',
      overflow: 'hidden',
      boxOrient: 'vertical',
      wordBreak: 'break-all',
      lineClamp: 3,
      lineHeight: 1.3,
    }
  })
);

export type NameProps = {
  name: string;
}

const Name = ({ name }: NameProps) => {
  const styles = useStyles();
  return <div style={nameWrapperStyles}>
    <Typography className={styles.nameStyles}>{name}</Typography>
  </div>;
};

export default memo(Name);
