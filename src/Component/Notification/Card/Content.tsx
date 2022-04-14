import * as React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    gridRowStart: 2,
    gridColumnStart: 1,
    gridColumnEnd: 'none'
  }
}))

const Content: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const classes = useStyles()
  return (
    !children
      ? null :
      <CardContent className={classes.root}>
        <Typography variant='body2' component='div'>
          {children}
        </Typography>
      </CardContent>
  )
}
export default React.memo(Content)
