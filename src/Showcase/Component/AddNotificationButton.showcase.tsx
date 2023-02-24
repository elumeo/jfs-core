import * as React from 'react';

import { Button, IconButton, Tooltip } from '@mui/material';
import { VariantType } from 'notistack';
import { Notification, Severity } from '../../Types/Notification';
import Box from '@mui/material/Box';
import { Refresh, SignalCellularConnectedNoInternet0Bar, Visibility } from '@mui/icons-material';
import definition from '../../Component/App/Stateless/Style/Theme/Definition';
import { useDispatch } from 'react-redux';
import { addNotification, addToastAction } from '../../Store/Action';
import * as Color from '../../Constant/Color'
const sxs = (variant: Severity) => ({
  backgroundColor: Color?.[variant]?.['main'] || definition.palette.grey['A400'],
  color: Color?.[variant]?.['contrastText'] || definition.palette.grey['50'],
  '&:hover': {
    backgroundColor: Color?.[variant]?.['dark'] || definition.palette.grey['A700'],
    color: Color?.[variant]?.['contrastText'] || definition.palette.grey['50']
  }
})

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
    const classes = sxs(variant as Severity)
    const dispatch = useDispatch()
    const addNotificationCallback = React.useCallback(() => dispatch(addNotification(generateNotification())), [dispatch])

    const generateNotification = React.useCallback((): Notification => {
      const defaultProps: Notification = { group, variant, notistackOptions: { persist } }
      switch (variant) {
        case 'error':
          return {
            ...defaultProps,
            title: 'ServerError',
            subtitle: 'Join Room (action.payload.name)',
            content: <Box display='flex' flexDirection='column'>
              <span>Habitant habitasse, sem etiamnostra etiam. Tristique viverra volutpat mi, ornare non tellus, praesent odio justo platea erat quis. Aliquam est varius, fringilla class, in ad dictumst turpis vivamus eros augue. Nunc fames donec, vehicula phasellus, volutpat sem luctus leo ut. Consequat nulla enim, curae hac, lorem purus cursus feugiat habitant fusce. Ante metus curabitur, litora nec, donec diam bibendum euismod elit placerat neque. Pretium sit, morbi odio iaculis.</span>
              <br />
              <Box display='flex' flexDirection='row'>
                <Button color='inherit' startIcon={<Refresh />}>Try again</Button>
                <Button color='inherit' startIcon={<SignalCellularConnectedNoInternet0Bar />}>Go offline</Button>
              </Box>
            </Box>
          }
        case 'warning':
          return {
            ...defaultProps,
            title: 'Not yet finished',
            subtitle: 'Some changes haven\'t been saved',
            action: () => <Tooltip title='Show'><IconButton color='inherit'><Visibility /></IconButton></Tooltip>
          }
        case 'success':
          return { ...defaultProps, title: 'Changes saved' }
        case 'info':
          return {
            ...defaultProps,
            content: 'Time for a cup of coffee!',
            action: () => <Button color='inherit' onClick={() => dispatch(addToastAction({
              contentMessage: '☕️',
              dismissLabel: 'Thanks',
            }))}>Get it</Button>
          }
        case 'default':
        default:
          return { ...defaultProps, variant: 'default', content: 'content loaded' }
      }
    }, [variant, persist, dispatch])

    return (
      <Button sx={classes} variant={'text'} onClick={addNotificationCallback}>
        {variant} Notification
      </Button>
    );
  }

export default AddNotificationButton;
