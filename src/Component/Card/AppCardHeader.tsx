import React, { memo, ReactNode, useMemo } from 'react';
import { CardHeader, Grid, IconButton, LinearProgress, Typography } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButtonProps } from '@mui/material/IconButton';
import { CSSProperties } from '@mui/styles/withStyles';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

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


  const cardHeaderStyles: CSSProperties = useMemo(() => ({ position: 'relative', alignItems: 'flex-start' }), []);
  const linearProgressRootStyles: CSSProperties = useMemo(() => ({
    position: 'absolute',
    width: 'calc(100% + ' + definition.spacing(4) + 'px)',
    top: 0,
    left: (definition.spacing(2) * -1) + 'px'
  }), []);

  const buildRefreshButton = () => <Grid item>
    <IconButton color={refreshButtonColor} size={refreshButtonSize} disabled={isLoading} onClick={onRefresh}>
      <RefreshIcon />
    </IconButton>
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
