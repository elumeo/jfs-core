import * as React from 'react';

import { FormControl, Input, InputLabel, InputProps } from '@mui/material';
import { useDispatch } from 'react-redux';
import { configLoadedAction } from 'Store/Action';
import useSelector from 'Store/useSelector';

const ChangeNotificationMax: React.FC =
  () => {
    const config = useSelector(state => state?.Core?.Configuration?.config)
    const dispatch = useDispatch();
    const max = config?.NotificationMax || '';
    const onChange: InputProps['onChange'] = React.useCallback(event => {
      dispatch(configLoadedAction({ config: { ...config, NotificationMax: Number(event.target.value) } }))
    }, [config])
    return (
      <FormControl>
        <InputLabel>Max</InputLabel>
        <Input value={max} inputMode='numeric' onChange={onChange} />
      </FormControl>
    )
  }

export default ChangeNotificationMax
