import React, { memo, ReactNode } from 'react';
import { CardHeader, Grid, IconButton, LinearProgress, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    position: 'relative',
    alignItems: 'flex-start'
  },
  progress: {
    position: 'absolute',
    width: 'calc(100% + ' + theme.spacing(4) + 'px)',
    top: 0,
    left: -theme.spacing(2)
  }
}));

type AppCardTitleProps = {
  isLoading?: boolean;
  title: ReactNode;
  subtitle?: ReactNode;
  titleIcon?: ReactNode;
  action?: ReactNode;
  onRefresh?: () => void;
}

const AppCardHeader = ({ isLoading = false, title, subtitle = null, titleIcon = null, onRefresh = null, action = null }: AppCardTitleProps) => {
  const classes = useStyles();

  const buildRefreshButton = () => {
    return <Grid item>
      <IconButton
        color={'secondary'}
        style={{ verticalAlign: '-4px', padding: '2px' }}
        size={'small'}
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

  return <CardHeader
    className={classes.root}
    subheader={subtitle}
    title={headerTitle}
    action={action}
  />;
};

export default memo(AppCardHeader);
