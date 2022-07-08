import React, { memo, ReactNode, useMemo } from 'react';
import { CardHeader, Grid, LinearProgress, Typography } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { useTheme, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import RefreshButton from 'Component/Button/RefreshButton';

export type AppCardHeaderBaseProps = {
  isLoading?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  titleIcon?: ReactNode;
  action?: ReactNode;
  onRefresh?: () => void;
  refreshButtonColor?: IconButtonProps['color'];
  refreshButtonSize?: IconButtonProps['size'];
  additionalTitleComponent?: ReactNode;
};

const AppCardHeader = ({
                             isLoading = false,
                             title,
                             subtitle = null,
                             titleIcon = null,
                             onRefresh = null,
                             refreshButtonColor = 'secondary',
                             refreshButtonSize = 'small',
                             additionalTitleComponent = null,
                             action = null
                           }: AppCardHeaderBaseProps) => {
  const theme = useTheme<Theme>();

  const cardHeaderStyles: CSSProperties = useMemo(() => ({ position: 'relative', alignItems: 'flex-start' }), []);
  const linearProgressRootStyles: CSSProperties = useMemo(() => ({
    position: 'absolute',
    width: 'calc(100% + ' + theme.spacing(4) + 'px)',
    top: 0,
    left: (theme.spacing(2) * -1) + 'px'
  }), []);

  const buildRefreshButton = () => <Grid item>
    <RefreshButton color={refreshButtonColor} size={refreshButtonSize} disabled={isLoading} onClick={onRefresh} />
  </Grid>;
  const headerTitle = <>
    {isLoading && <LinearProgress color='secondary' style={linearProgressRootStyles} />}
    <Grid container spacing={1} alignItems='center'>
      {titleIcon !== null && <Grid item>{titleIcon}</Grid>}
      <Grid item><Typography variant='h5'>{title}</Typography></Grid>
      {onRefresh !== null && buildRefreshButton()}
      {additionalTitleComponent !== null && <Grid item>{additionalTitleComponent}</Grid>}
    </Grid>
  </>;
  return <CardHeader style={cardHeaderStyles} subheader={subtitle} title={headerTitle} action={action} />;
};

export default memo(AppCardHeader);
