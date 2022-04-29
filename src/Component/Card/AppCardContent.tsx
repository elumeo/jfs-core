import React, { memo, useMemo } from 'react';
import { CardContent } from '@mui/material';
import { CardContentProps } from '@mui/material/CardContent/CardContent';
import theme from 'Component/App/Stateless/Style/Theme/Definition';
import { CSSProperties } from '@mui/styles/withStyles';

export type AppCardContentBaseProps = CardContentProps & {
  fullHeight?: boolean;
  withSubtitle?: boolean;
  overrideCardTitleHeight?: string;
  className?: string;
};

const AppCardContent = ({ children, fullHeight = false, withSubtitle = false, overrideCardTitleHeight = null, ...rest }: AppCardContentBaseProps) => {

  const styles: CSSProperties = useMemo(() => ({
    flexDirection: 'column',
    height: overrideCardTitleHeight !== null ? overrideCardTitleHeight : fullHeight
      ? 'calc(100% - ' + (withSubtitle ? theme.spacing(10) : theme.spacing(7)) + 'px)'
      : 'initial'
  }), [fullHeight, withSubtitle, overrideCardTitleHeight]);
  return <CardContent style={styles} {...rest}>{children}</CardContent>;
};

export default memo(AppCardContent);
