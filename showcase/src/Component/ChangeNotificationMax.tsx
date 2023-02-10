import * as React from 'react';

import { FormControl, Input, InputLabel } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { configLoadedAction } from 'Store/Action';

const ChangeNotificationMax: React.FC =
  () => {
    const config = useSelector(state => state?.Core?.Configuration?.config)
    const dispatch = useDispatch();
    const max = config?.NotificationMax || '';
    const onChange = React.useCallback(event => {
      dispatch(configLoadedAction({ config: { ...config, NotificationMax: event.target.value as number } }))
    }, [config])
    return (
      <FormControl>
        <InputLabel>Max</InputLabel>
        <Input value={max} inputMode='numeric' onChange={onChange} />
      </FormControl>
    )
  }

export default React.memo(ChangeNotificationMax)
