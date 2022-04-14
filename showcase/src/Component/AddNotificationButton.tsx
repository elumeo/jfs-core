import * as React from 'react';
import { useCallback } from 'react';
import useActions from 'Core/Store/useActions';
import { Button, IconButton, Theme, Tooltip } from '@material-ui/core';
import { VariantType } from 'notistack';
import { Notification, Severity } from 'Core/Types/Notification';
import Box from '@material-ui/core/Box';
import { Refresh, SignalCellularConnectedNoInternet0Bar, Visibility } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles<Theme, { variant: Severity }>(theme => ({
  root: {
    backgroundColor: props => theme.palette?.[props.variant]?.['main'] || theme.palette.grey['A400'],
    color: props => theme.palette?.[props.variant]?.['contrastText'] || theme.palette.grey['50']
  }
}))

type Props = {
  variant: VariantType,
  persist: boolean,
  group?: string
}

const AddNotificationButton: React.FC<Props> =
  ({
     variant,
     group = 'default',
     persist = false
   }) => {
    const classes = useStyles({ variant: variant as Severity })
    const { addNotification, addToastAction } = useActions();
    const addNotificationCallback = useCallback(() => addNotification(generateNotification()), [addNotification])

    const generateNotification = useCallback((): Notification => {
      const defaultProps: Notification = { group, variant, notistackOptions: { persist } }
      switch (variant) {
        case 'error':
          return {
            ...defaultProps,
            title: 'ServerError',
            subtitle: 'Join Room (action.payload.name)',
            content: <Box display='flex' flexDirection='column'>
              <span>Habitant habitasse, sem etiamnostra etiam. Tristique viverra volutpat mi, ornare non tellus, praesent odio justo platea erat quis. Aliquam est varius, fringilla class, in ad dictumst turpis vivamus eros augue. Nunc fames donec, vehicula phasellus, volutpat sem luctus leo ut. Consequat nulla enim, curae hac, lorem purus cursus feugiat habitant fusce. Ante metus curabitur, litora nec, donec diam bibendum euismod elit placerat neque. Pretium sit, morbi odio iaculis.</span>
              <br/>
              <Box display='flex' flexDirection='row'>
                <Button color='inherit' startIcon={<Refresh/>}>Try again</Button>
                <Button color='inherit' startIcon={<SignalCellularConnectedNoInternet0Bar/>}>Go offline</Button>
              </Box>
            </Box>
          }
        case 'warning':
          return {
            ...defaultProps,
            title: 'Not yet finished',
            subtitle: 'Some changes haven\'t been saved',
            action: () => <Tooltip title='Show'><IconButton color='inherit'><Visibility/></IconButton></Tooltip>
          }
        case 'success':
          return { ...defaultProps, title: 'Changes saved' }
        case 'info':
          return {
            ...defaultProps,
            content: 'Time for a cup of coffee!',
            action: () => <Button color='inherit' onClick={() => addToastAction({
              contentMessage: '☕️',
              dismissLabel: 'Thanks',
            })}>Get it</Button>
          }
        case 'default':
        default:
          return { ...defaultProps, variant: 'default', content: 'content loaded' }
      }
    }, [variant, persist, addToastAction])

    return (
      <Button className={classes.root} variant={'outlined'} onClick={addNotificationCallback}>
        {variant} Notification
      </Button>
    );
  }

export default AddNotificationButton;
