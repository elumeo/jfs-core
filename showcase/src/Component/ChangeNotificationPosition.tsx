import * as React from 'react';
import useSelector from 'Core/Store/useSelector';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useCallback } from 'react';
import useActions from 'Core/Store/useActions';
import { NotificationPosition } from 'Core/Types/Notification';

const ChangeNotificationPosition: React.FC =
  () => {
    const config = useSelector(state => state.Core.Configuration.config)
    const position: NotificationPosition = config?.NotificationPosition || 'bottomRight';
    const { configLoadedAction } = useActions();
    const onChange = useCallback(event => {
      configLoadedAction({ config: { ...config, NotificationPosition: event.target.value as NotificationPosition } })
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
