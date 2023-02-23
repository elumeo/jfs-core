import * as React from 'react';
import useSelector from '../../Store/useSelector';
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';

import { NotificationPosition } from '../../Types/Notification';
import { useDispatch } from 'react-redux';
import { configLoadedAction } from '../../Store/Action';
import * as Selector from '../../Store/Selector'

const ChangeNotificationPosition: React.FC =
  () => {
    const config = useSelector(Selector.Configuration.Configuration)
    const dispatch = useDispatch()
    const position: NotificationPosition = config?.NotificationPosition || 'bottomRight';
    const onChange: SelectProps['onChange'] = React.useCallback(event => {
      dispatch(configLoadedAction({ config: { ...config, NotificationPosition: event.target.value as NotificationPosition } }))
    }, [config])
    return (
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Select value={position} onChange={onChange}>
          <MenuItem value='topRight'>topRight</MenuItem>
          <MenuItem value='bottomRight'>bottomRight</MenuItem>
        </Select>
      </FormControl>
    )
  }

export default React.memo(ChangeNotificationPosition)
