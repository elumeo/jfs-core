import React, { memo, ReactNode } from 'react';
import { CardHeader, Grid, IconButton, LinearProgress, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';
import { IconButtonProps } from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => createStyles({
  cardHeaderRoot: {
    position: 'relative',
    alignItems: 'flex-start'
  },
  progress: {
    position: 'absolute',
    width: 'calc(100% + ' + theme.spacing(4) + 'px)',
    top: 0,
    left: -theme.spacing(2)
  },
  refreshButtonRoot: {
    verticalAlign: -theme.spacing(0.5), //'-4px',
    padding: theme.spacing(0.25), // '2px'
  }
}));

type AppCardTitleProps = {
  isLoading?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  titleIcon?: ReactNode;
  action?: ReactNode;
  onRefresh?: () => void;
  refreshButtonColor?: IconButtonProps['color'];
  refreshButtonSize?: IconButtonProps['size'];
}

const AppCardHeader = ({ isLoading = false, title, subtitle = null, titleIcon = null, onRefresh = null, refreshButtonColor = 'secondary', refreshButtonSize = 'small', action = null }: AppCardTitleProps) => {
  const classes = useStyles();

  const buildRefreshButton = () => {
    return <Grid item>
      <IconButton
        color={refreshButtonColor}
        classes={{ root: classes.refreshButtonRoot }}
        size={refreshButtonSize}
        disabled={isLoading}
        onClick={onRefresh}
      ><RefreshIcon/></IconButton>
    </Grid>;
  };

  const headerTitle = <>
    {isLoading && <LinearProgress className={classes.progress} color={'secondary'}/>}
    <Grid container spacing={1} alignItems={'center'}>
      {titleIcon !== null && <Grid item>{titleIcon}</Grid>}
      <Grid item><Typography variant='h5'>{title}</Typography></Grid>
      {onRefresh !== null && buildRefreshButton()}
    </Grid>
  </>;

  return <CardHeader className={classes.cardHeaderRoot} subheader={subtitle} title={headerTitle} action={action} />;
};

export default memo(AppCardHeader);
