import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import useSelector from 'Store/useSelector';
import useActions from 'Store/useActions';
import { useCallback } from 'react';

const RemoveNotificationGroupSelect: React.FC = () => {
  const groups = useSelector(state => Array.from(new Set(state.Core.Notification.history.map(n => n.group))))
  const { removeNotificationGroup } = useActions()
  const onChange = useCallback(event => {
    removeNotificationGroup(event.target.value)
  }, [])
  return (
    <FormControl fullWidth>
      <InputLabel>Remove by group name</InputLabel>
      <Select value={0} onChange={onChange} fullWidth>{
        groups.map(group => <MenuItem key={group} value={group}>{group}</MenuItem>)
      }</Select>
    </FormControl>
  );
}

export default RemoveNotificationGroupSelect;
