import * as React from 'react';
import CardActions from '@material-ui/core/CardActions';
import { Props as CardProps } from './';
import { makeStyles } from '@material-ui/core/styles';
import { Notification } from 'Types/Notification';
import { useSnackbar } from 'notistack';
import * as Button from '../Button';

const useStyles = makeStyles(({
  root: {
    gridColumnStart: 2,
    gridRowStart: 1,
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplate: 'auto auto / auto auto',
    alignContent: 'center',
    direction: 'rtl',
    justifyItems: 'start'
  }
}))

type Props = Pick<CardProps, 'temporary'> & Pick<Notification, 'action' | 'id'>

const Actions: React.FC<Props> = ({ temporary, action, id }) => {
  const classes = useStyles()
  const snackbar = useSnackbar();

  return (
    <CardActions className={classes.root}>
      {!temporary ? <Button.Delete id={id}/> : null}
      {action ? action(snackbar, id, temporary) : null}
    </CardActions>
  )
}

export default React.memo(Actions)
