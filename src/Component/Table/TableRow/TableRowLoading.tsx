import React, { memo } from 'react';
import { CircularProgress } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const rowStyles = makeStyles(theme => createStyles({
  CircularProgress: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  }
}));

const TableRowLoading = () => {
  const css = rowStyles();
  return <div className={css.CircularProgress}>
    <CircularProgress/>
  </div>;
}

export default memo(TableRowLoading);
