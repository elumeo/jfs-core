import * as React from 'react';
import {PropsWithChildren} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography, {TypographyProps} from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(({
  root: {
    gridRowStart: 2,
    gridColumnStart: 1,
    gridColumnEnd: 'none'
  },
}))
const useTypographyStyles = makeStyles(({
  body2: {
    wordBreak: 'break-word'
  }
}))

const Content: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const classes = useStyles()
  const typographyClasses: TypographyProps['classes'] = useTypographyStyles()
  return (
    !children
      ? null :
      <CardContent classes={classes}>
        <Typography variant='body2' component='div' classes={typographyClasses}>
          {children}
        </Typography>
      </CardContent>
  )
}
export default React.memo(Content)
