import * as React from 'react';
import { PropsWithChildren } from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const classes = {
  root: {
    gridRowStart: 2,
    gridColumnStart: 1,
    gridColumnEnd: 'none'
  },
  typoSx: {
    wordBreak: 'break-word'
  }
}

const Content: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    !children
      ? null :
      <CardContent sx={classes.root}>
        <Typography variant='body2' component='div' sx={classes.typoSx}>
          {children}
        </Typography>
      </CardContent>
  )
}
export default Content
