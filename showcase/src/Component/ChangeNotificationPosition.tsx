import * as React from 'react';
import useSelector from 'Core/Store/useSelector';
import { FormControl, InputLabel, MenuItem, Select, SelectProps } from '@mui/material';

import { NotificationPosition } from 'Core/Types/Notification';
import { useDispatch } from 'react-redux';
import { configLoadedAction } from '@elumeo/jfs-core/build/Store/Action';

const ChangeNotificationPosition: React.FC =
  () => {
    const config = useSelector(state => state.Core.Configuration.config)
    const dispatch = useDispatch()
    const position: NotificationPosition = config?.NotificationPosition || 'bottomRight';
    const onChange: SelectProps['onChange']= React.useCallback(event => {
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
