import React, { memo, ReactNode } from 'react';
import {
  CardHeader,
  Grid,
  IconButton, LinearProgress,
  Typography
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButtonProps } from '@material-ui/core/IconButton';

export type AppCardHeaderBaseProps = {
  isLoading?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  titleIcon?: ReactNode;
  action?: ReactNode;
  onRefresh?: () => void;
  className?: string;
  refreshButtonColor?: IconButtonProps['color'];
  refreshButtonSize?: IconButtonProps['size'];
  additionalTitleComponent: ReactNode;
};

const AppCardHeaderBase = ({
                             isLoading = false,
                             title,
                             subtitle = null,
                             titleIcon = null,
                             onRefresh = null,
                             refreshButtonColor = 'secondary',
                             refreshButtonSize = 'small',
                             additionalTitleComponent = null,
                             action = null,
                             className
                           }: AppCardHeaderBaseProps) => {
  const buildRefreshButton = () => {
    return <Grid item>
      <IconButton
        color={refreshButtonColor}
        // classes={{ root: classes.refreshButtonRoot }}
        size={refreshButtonSize}
        disabled={isLoading}
        onClick={onRefresh}>
        <RefreshIcon />
      </IconButton>
    </Grid>;
  };

  const headerTitle = (
    <>
      {isLoading && <LinearProgress color={'secondary'} />}
      <Grid container spacing={1} alignItems={'center'}>
        {titleIcon !== null && <Grid item>{titleIcon}</Grid>}
        <Grid item>
          <Typography variant='h5'>{title}</Typography>
        </Grid>
        {onRefresh !== null && buildRefreshButton()}
        {additionalTitleComponent !== null && <Grid item>{additionalTitleComponent}</Grid>}
      </Grid>
    </>
  );

  return (
    <CardHeader
      className={className}
      // className={classes.cardHeaderRoot}
      subheader={subtitle}
      title={headerTitle}
      action={action}
    />
  );
};

export default memo(AppCardHeaderBase);
