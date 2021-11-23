import React, { memo, useMemo } from 'react';
import { CardContent } from '@material-ui/core';
import { CardContentProps } from '@material-ui/core/CardContent/CardContent';
import { Theme, useTheme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type AppCardContentBaseProps = CardContentProps & {
  fullHeight?: boolean;
  withSubtitle?: boolean;
  overrideCardTitleHeight?: string;
  className?: string;
};

const AppCardContent = ({ children, fullHeight = false, withSubtitle = false, overrideCardTitleHeight = null, ...rest }: AppCardContentBaseProps) => {
  const theme = useTheme<Theme>();
  const styles: CSSProperties = useMemo(() => ({
    flexDirection: 'column',
    height: overrideCardTitleHeight !== null ? overrideCardTitleHeight : fullHeight
      ? 'calc(100% - ' + (withSubtitle ? theme.spacing(10) : theme.spacing(7)) + 'px)'
      : 'initial'
  }), [fullHeight, withSubtitle, overrideCardTitleHeight]);
  return <CardContent style={styles} {...rest}>{children}</CardContent>;
};

export default memo(AppCardContent);
