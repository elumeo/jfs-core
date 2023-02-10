import * as React from 'react';
import { Props as CardProps } from './';
import { Notification } from 'Types/Notification';
import { useSnackbar } from 'notistack';
import * as Button from '../Button';
import Box from '@mui/material/Box';
import definition from 'Component/App/Stateless/Style/Theme/Definition';

const useStyles = {
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
    padding: definition.spacing(1)
  }
}

type Props = Pick<CardProps, 'temporary'> & Pick<Notification, 'action' | 'id'>

const Actions: React.FC<Props> = ({ temporary, action, id }) => {
  const classes = useStyles;
  const snackbar = useSnackbar();

  return (<Box sx={classes.root}>
    <>
      {!temporary ? <Button.Delete id={id} /> : null}
      {action ? action(snackbar, id, temporary) : null}
    </>
  </Box>
  )
};

export default  Actions
