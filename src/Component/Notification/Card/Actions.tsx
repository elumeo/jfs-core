import * as React from 'react';
import { Props as CardProps } from './';
import { makeStyles } from '@material-ui/core/styles';
import { Notification } from 'Types/Notification';
import { useSnackbar } from 'notistack';
import * as Button from '../Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    gridColumnStart: 2,
    gridRowStart: 1,
    display: 'grid',
    gridAutoFlow: 'column',
    gridTemplate: 'auto auto / auto auto',
    alignContent: 'center',
    direction: 'rtl',
    justifyItems: 'start',
    alignSelf: 'start',
    padding: theme.spacing(1)
  }
}));

type Props = Pick<CardProps, 'temporary'> & Pick<Notification, 'action' | 'id'>

const Actions: React.FC<Props> = ({ temporary, action, id }) => {
  const classes = useStyles();
  const snackbar = useSnackbar();

  return (<Box className={classes.root}>
      <>
        {!temporary ? <Button.Delete id={id}/> : null}
        {action ? action(snackbar, id, temporary) : null}
      </>
    </Box>
  )
};

export default React.memo(Actions);
