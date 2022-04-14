import * as React from 'react';
import { useCallback } from 'react';
import useSelector from 'Store/useSelector';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import useActions from 'Store/useActions';

const ChangeNotificationMax: React.FC =
  () => {
    const config = useSelector(state => state.Core.Configuration.config)
    const max = config?.NotificationMax || '';
    const { configLoadedAction } = useActions();
    const onChange = useCallback(event => {
      configLoadedAction({ config: { ...config, NotificationMax: event.target.value as number } })
    }, [config])
    return (
      <FormControl>
        <InputLabel>Max</InputLabel>
        <Input value={max} inputMode='numeric' onChange={onChange}/>
      </FormControl>
    )
  }

export default React.memo(ChangeNotificationMax)
